## Current

- Navigate to an event
- Navigate to a team
- Navigate to a match within an event
- Event
  - List of teams w/ event stats
  - Export
- Team
  - Picture — uploaded by pit scouts
  - Stats
  - Graphs
    - Climb data pie chart
    - Line chart cargo stats by match
- Match
  - Pictures of each robot by alliance
  - Summarized stats

## Database

- Events: id, name, location (stuff from TBA)
- Matches: id, match number, teams
- Teams: id, name (stuff from TBA)
- Stat collection: team id, match, stats

## Routing

- `/`:
  - Event: list events
  - Team: event, team number/name
  - Matches: event, match number
- `/event/:id`
- `/event/:id/team/:teamID`
- `/event/:id/match/:matchNumber`
