import { json, LoaderFunction, useLoaderData } from "remix";
import { readTeams, Team } from "~/database";

export const loader: LoaderFunction = async () => {
  const teams = await readTeams();
  return json(teams);
};

export default function List() {
  const teams = useLoaderData<Team[]>();

  return (
    <>
      <h1>Team list</h1>
      <a href="create">Create</a>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.number}>
              <a href={`${team.number}`}>{team.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
