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
const db = require("./config/db");
db.sequelize.sync();

// web server
app.listen(PORT, () => {
  console.log(`Server open : ${PORT}`);
});
