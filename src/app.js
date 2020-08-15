const express = require("express");
const Sequelize = require("sequelize");
const app = express();

//routers
const todoRouter = require("./controllers/todo");

// constants
const PORT = 50000;
const { getMysqlUri } = require("./config/db");

//setting
app.use(express.json());

//web sever
app.use("/api/v1", todoRouter);

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
app.listen(PORT, () => {
  console.log(`Server open : ${PORT}`);
});
