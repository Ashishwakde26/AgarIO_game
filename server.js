const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));
const expressServer = app.listen(9000, () => console.log("Server is running on 9000"));
const socketio = require('socket.io');
const io = socketio(expressServer);


module.exports = [
    app, io
]