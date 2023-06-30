import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "eA0G4AJ6vC9wtmSKsLq7", {
  host: "containers-us-west-155.railway.app",
  logging: false,
  dialect: "postgres",
  postgres: 7442
});