import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("db_recetas", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});


