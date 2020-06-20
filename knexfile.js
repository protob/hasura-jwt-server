// Update with your config settings.

const databaseName = "postgres";
const pg = require("pg");

const connection_url =
  process.env.DATABASE_URL ||
  // `postgres://postgres:@localhost:6432/${databaseName}`;
  `postgres://postgres:mypassword@172.17.155.49:5432/postgres`;
module.exports = {
  client: "pg",
  connection: connection_url,
  migrations: {
    directory: __dirname + "/db/migrations",
  },
};
