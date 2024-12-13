// server.js
require("dotenv").config();//Se carga la configuracion de las variables de entorno definidas en el archivo .env

//Se importan las bibliotecas necesarias para la aplicacion como express para crear el servidor web, multer para 
//manejar la carga de archivos y cors para permitir el acceso cruzado de origenes
const express = require("express");
const multer = require("multer");
const cors = require("cors");

const sequelize = require('./config/database'); // Importa la configuracion de la base de datos
const Payment = require('./models/payment'); // Importa el modelo Payment
require("dotenv").config();

const uri = process.env.PG_URI; //Variable de entorno PG_URI, que contiene la cadena de conexion a la base de datos PostgreSQL  


//Se crea una instancia de express y se configura el middleware para permitir el acceso cruzado de origenes y el manejo de datos en formato JSON 
const app = express();
app.use(cors());
app.use(express.json());

// Configuracion de Multer para subir archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Endpoint para recibir pagos
app.post("/api/payments", upload.single("paymentProof"), async (req, res) => {
  try {
    const { amount, reference, bank, mobileNumber } = req.body;
    const payment = await Payment.create({
      amount,
      reference,
      bank,
      mobileNumber,
      paymentProof: req.file.path,
    });


    res.status(201).json({ message: "Pago recibido con éxito", payment });
  } catch (error) {
    console.error("Error al procesar el pago:", error);
    res.status(500).json({ message: "Error al procesar el pago", error: error.message });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  
  // Verifica la conexion a la base de datos
  sequelize.authenticate()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.error('No se pudo conectar a PostgreSQL:', err));
});