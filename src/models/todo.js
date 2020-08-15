const Sequelize = require("sequelize");
const { getMysqlUri } = require("../config/db");

const sequelize = new Sequelize(getMysqlUri());

const Todo = sequelize.define([
  "todo",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
]);

Todo.sync()
  .then(() => {
    console.log("Model [Todo] Created.");
  })
  .finally(() => {
    sequelize.close();
  });

module.exports = Todo;
