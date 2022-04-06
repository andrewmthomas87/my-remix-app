import { Button, Container, Paper, Stack, TextField } from "@mui/material";
import { ActionFunction, Form, redirect } from "remix";
import { addTeam } from "~/database";

export const action: ActionFunction = async (args) => {
  const formData = await args.request.formData();

  const number = formData.get("number") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  await addTeam({
    number: parseInt(number),
    name: name,
    description: description,
  });

  return redirect("/team/list");
};

export default function Create() {
  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          px: 4,
          py: 2,
        }}
      >
        <h1>Create team</h1>
        <Form method="post">
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Team number"
                type="number"
                name="number"
                fullWidth
              />
              <TextField label="Team name" name="name" fullWidth />
            </Stack>
            <TextField label="Description" name="description" multiline />
            <Button type="submit" variant="contained">
              Create team
            </Button>
          </Stack>
        </Form>
      </Paper>
    </Container>
  );
}
