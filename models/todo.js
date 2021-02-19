module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("todo", {
    list: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Todo;
};
