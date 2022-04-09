import { PrismaClient } from "@prisma/client";

export type Team = {
  number: number;
  name: string;
  description: string;
};

export const db = new PrismaClient();

export function addTeam(team: Team): Promise<Team> {
  return Promise.resolve({} as any);
  // return db.team.create({
  //   data: {
  //     number: team.number,
  //     name: team.name,
  //     description: team.description,
  //   },
  // });
}

export async function readTeams(): Promise<Team[]> {
  return Promise.resolve([]);
  // return db.team.findMany();
}

export async function getTeam(number: number): Promise<Team | null> {
  return Promise.resolve(null);
  // return db.team.findUnique({
  //   where: {
  //     number: number,
  //   },
  // });
}
