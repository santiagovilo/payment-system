// models/Payment.js
const { DataTypes } = require('sequelize'); //Se importan los tipos de datos de Sequelize y se obtiene la instancia de Sequelize configurada en el archivo database.js
const sequelize = require('../config/database');

//Se define el modelo Payment utilizando el metodo define() de Sequelize. Este modelo tiene los campos del registro
const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bank: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentProof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincroniza el modelo con la base de datos
Payment.sync()
  .then(() => console.log('Modelo Payment sincronizado con la base de datos'))
  .catch(err => console.error('Error al sincronizar el modelo Payment:', err));

module.exports = Payment;