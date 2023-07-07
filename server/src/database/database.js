import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "TlIYOECCAZuoOHMppfQg", {
  host: "containers-us-west-192.railway.app",
  logging: false,
  dialect: "postgres",
  port: 7106,
});


