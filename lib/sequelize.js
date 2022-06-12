const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('diploma', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  });

const connect = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.log("Unable to connect to the database:", err.message);
    });
};
  

module.exports = {sequelize, connect};

