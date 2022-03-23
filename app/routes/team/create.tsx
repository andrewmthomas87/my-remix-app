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
    <>
      <h1>Create team</h1>
      <Form method="post">
        <p>
          <label>
            Team number: <input type="number" name="number" />
          </label>
        </p>
        <p>
          <label>
            Team name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label htmlFor="description">Description:</label>
          <br />
          <textarea id="description" rows={20} name="description" />
        </p>
        <p>
          <button type="submit">Create team</button>
        </p>
      </Form>
    </>
  );
}
