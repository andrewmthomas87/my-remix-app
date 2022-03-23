import fs from "fs/promises";

export type Team = {
  number: number;
  name: string;
  description: string;
};

export async function writeTeams(teams: Team[]) {
  await fs.writeFile("teams.json", JSON.stringify(teams));
}

export async function readTeams(): Promise<Team[]> {
  const json = await fs.readFile("teams.json");
  return JSON.parse(json.toString());
}

export async function addTeam(team: Team) {
  const teams = await readTeams();
  teams.push(team);
  await writeTeams(teams);
}
