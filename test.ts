import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  await db.team.create({
    data: {
      number: 1619,
      name: "Up-A-Creek Robotics",
      description: "da best around",
    },
  });

  const team = await db.team.findFirst();

  console.log(team);
}

test();
