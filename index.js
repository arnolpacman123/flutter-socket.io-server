const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Node Server
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
module.exports.io = new Server(server);
require('./sockets/socket');

// Path público
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (error) => {
    if (error) throw new Error(error);
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});