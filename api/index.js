const express = require("express");
const { Sequelize, ConnectionAcquireTimeoutError } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "sequelize-timeout-test-db-1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  pool: {
    max: 20,
    min: 0,
    idle: 2000,
    acquire: 5000,
    maxUses: 100,
  },
});

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    await sequelize.query("SELECT pg_sleep(random() * 10);");
    res.status(200).send();
  } catch (e) {
    const message =
      e instanceof ConnectionAcquireTimeoutError
        ? { errorType: "ConnectionAcquireTimeoutError" }
        : { errorType: "Other error" };
    res.status(500).json(message);
  }
  // sequelize.query("SELECT pg_sleep(random() * 3 + 0.5);");
});

app.listen(port);
console.log(`Listening on port ${port}...`);
