import { PrismaClient } from "@prisma/client";

export type Team = {
  number: number;
  name: string;
  description: string;
};

const db = new PrismaClient();

export function addTeam(team: Team): Promise<Team> {
  return db.team.create({
    data: {
      number: team.number,
      name: team.name,
      description: team.description,
    },
  });
}

export async function readTeams(): Promise<Team[]> {
  return db.team.findMany();
}
