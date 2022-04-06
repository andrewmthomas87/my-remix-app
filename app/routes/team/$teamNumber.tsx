import { Container, Paper, Typography } from "@mui/material";
import { json, LoaderFunction, redirect, useLoaderData } from "remix";
import { getTeam, Team } from "~/database";

export const loader: LoaderFunction = async (args) => {
  const number = parseInt(args.params.teamNumber || "");
  if (isNaN(number)) {
    return redirect("/team/list");
  }

  const team = await getTeam(number);
  if (team === null) {
    return redirect("/team/list");
  }

  return json(team);
};

export default function Team() {
  const team = useLoaderData<Team>();

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          px: 4,
          py: 2,
        }}
      >
        <Typography variant="h2">{team.name}</Typography>
        <Typography variant="h1">{team.number}</Typography>
        <Typography variant="body1">
          {team.description || "No description"}
        </Typography>
      </Paper>
    </Container>
  );
}
