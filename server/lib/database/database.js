import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "PyhR4kaS2upLMeHdmCVD", {
  host: "containers-us-west-148.railway.app",
  logging: false,
  dialect: "postgres",
  port: 7479
});