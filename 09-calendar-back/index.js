// Importar express
const express = require('express');

// Importar cors
const cors = require('cors');

// Importar biblioteca para variables de entorno
require('dotenv').config();

// importar db
const {bdConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

// utilizar cors
app.use(cors());

// Conectar a la base de datos
bdConnection();

// Lectura y parse de las peticiones
app.use(express.json());

// rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/calendar', require('./routes/events'));

// Directorio publico
app.use(express.static('public'));

// Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log('servidor corriendo');
});