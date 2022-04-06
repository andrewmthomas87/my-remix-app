import {
  Button,
  Container,
  List as MUIList,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { json, LoaderFunction, useLoaderData } from "remix";
import { readTeams, Team } from "~/database";

export const loader: LoaderFunction = async () => {
  const teams = await readTeams();
  return json(teams);
};

export default function List() {
  const teams = useLoaderData<Team[]>();

  return (
    <Container maxWidth="md">
      <Paper sx={{ px: 4, py: 2 }}>
        <h1>Team list</h1>
        <Button variant="contained" href="create">
          Create
        </Button>
        <MUIList>
          {teams.map((team) => {
            return (
              <ListItem key={team.number} disablePadding>
                <ListItemButton component="a" href={`${team.number}`}>
                  <ListItemText primary={team.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </MUIList>
      </Paper>
    </Container>
  );
}
