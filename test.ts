import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function addDummyData() {
  const coEvent = await db.event.create({
    data: {
      key: "2022code",
      name: "Colorado Regional",
      week: 4,
    },
  });
  console.log("Created event", coEvent);

  const uacrTeam = await db.team.create({
    data: {
      key: "frc1619",
      teamNumber: 1619,
      name: "Up-A-Creek Robotics",
    },
  });
  console.log("Created team", uacrTeam);

  const match1 = await db.match.create({
    data: {
      key: "match1",
      matchNumber: 1,
      blueTeams: {
        connect: [{ key: uacrTeam.key }],
      },
    },
    include: {
      blueTeams: true,
      redTeams: true,
      stats: true,
    },
  });
  console.log("Created match", match1);

  const uacrStatsMatch1 = await db.stats.create({
    data: {
      highAutoCargo: 6,
      lowAutoCargo: 0,
      highTeleopCargo: 37,
      lowTeleopCargo: 0,
      climbHeight: 4,
      match: {
        connect: { key: match1.key },
      },
      team: {
        connect: { key: uacrTeam.key },
      },
    },
    include: {
      match: true,
      team: true,
    },
  });
  console.log("Created stats", uacrStatsMatch1);
}

addDummyData();
