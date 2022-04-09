import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import { Team } from "@prisma/client";
import { useState } from "react";
import { json, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/database";

export const loader: LoaderFunction = async () => {
  const teams = await db.team.findMany({
    include: {
      blueMatches: true,
      redMatches: true,
      stats: {
        include: {
          match: true,
        },
      },
    },
  });

  return json(teams);
};

export default function Test(): JSX.Element {
  const teams = useLoaderData<Team[]>();

  const [team, setTeam] = useState<Team | null>(null);

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Test</Typography>
      <Autocomplete
        options={teams}
        getOptionLabel={(team) => `${team.teamNumber}: ${team.name}`}
        renderInput={(params) => <TextField {...params} label="Options" />}
        onChange={(_, team) => setTeam(team)}
      />
      <pre>{JSON.stringify(team, null, 2)}</pre>
      {team ? (
        <>
          <Typography variant="h4">{team.teamNumber}</Typography>
          <Typography variant="h3">{team.name}</Typography>
        </>
      ) : null}
    </Container>
  );
}
