const express = require("express");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "sequelize-timeout-test-db-1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  pool: {
    max: 30,
    min: 10,
    idle: 2000,
    acquire: 30000,
    maxUses: 100,
  },
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  sequelize.query("SELECT pg_sleep(0.5);");
  // sequelize.query("SELECT pg_sleep(random() * 3 + 0.5);");
  res.status(200).send("Hello World");
});

app.listen(port);
console.log(`Listening on port ${port}...`);
