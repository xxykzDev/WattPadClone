const express = require('express');
const configureSwagger = require('./config/swagger');
const connectDB = require('./config/db');

const app = express();

configureSwagger(app);
connectDB();

// Configuración y middlewares
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});