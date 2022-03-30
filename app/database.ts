import fs from "fs/promises";
import sqlite3 from "sqlite3";

const sqlite3Verbose = sqlite3.verbose();
const db = new sqlite3Verbose.Database("teams.db");

export type Team = {
  number: number;
  name: string;
  description: string;
};

export async function writeTeams(teams: Team[]) {
  await fs.writeFile("teams.json", JSON.stringify(teams));
}

export function addTeam(team: Team): Promise<void> {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(
        "INSERT INTO teams (number, name, description) VALUES (?, ?, ?)"
      );
      stmt.run(team.number, team.name, team.description);
      stmt.finalize((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  });
}

export async function readTeams(): Promise<Team[]> {
  return new Promise((resolve, reject) => {
    const teams: Team[] = [];
    db.each(
      "SELECT number, name, description FROM teams ORDER BY number ASC",
      (err, row) => {
        teams.push(row);
      },
      (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(teams);
      }
    );
  });
}
