// config/database.js
const { Sequelize } = require('sequelize'); //Se importa el modulo Sequelize de la biblioteca sequelize, que es una ORM (Object-Relational Mapping) para Node.js que facilita la interaccion con bases de datos relacionales
require("dotenv").config(); //Se carga la configuracion de las variables de entorno definidas en el archivo .env

const uri = process.env.PG_URI; //Se obtiene la variable de entorno PG_URI, que contiene la cadena de conexion a la base de datos PostgreSQL
if (!uri) {
  throw new Error("The environment variable PG_URI is not defined");
}

const sequelize = new Sequelize(uri, { //Se crea una nueva instancia de Sequelize utilizando la cadena de conexion almacenada en la variable uri
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;