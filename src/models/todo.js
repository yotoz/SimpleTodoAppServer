module.exports = (sequelize, Sequelize) => {
  const todo = sequelize.define("todo", {
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
    hasDone: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return todo;
};
