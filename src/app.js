const express = require("express");
const Sequelize = require("sequelize");
const app = express();

// constants
const PORT = 50000;
const { getMysqlUri } = require("./config/db");
// database
const sequelize = new Sequelize(getMysqlUri());

sequelize
  .authenticate()
  .then(() => {
    console.log("Mysql Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })
  .finally(() => {
    sequelize.close();
  });

// web server
app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server open : ${PORT}`);
});
