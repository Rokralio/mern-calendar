const express  = require('express');
const dotenv  = require('dotenv').config();
const cors = require('cors')

const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//CORS
app.use( cors() )

// Drectorio public
app.use( express.static( 'public' ) );

// Lectura y parseo del body
app.use( express.json() );

// Rutas 
app.use( '/api/auth', require( './routes/auth' ) );
app.use( '/api/events', require( './routes/events' ) );



//Escuchar peticioznes
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});