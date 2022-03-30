import sqlite3 from "sqlite3";

const sqlite3Verbose = sqlite3.verbose();
const db = new sqlite3Verbose.Database("teams.db");

db.serialize(() => {
  db.run("CREATE TABLE teams (number INTEGER, name TEXT, description TEXT)");
});
