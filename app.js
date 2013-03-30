var io = require('socket.io').listen(8080);

var express = require("express");
var app = express();

app.set('view engine', 'jade');

app.set('view options', {
    layout:true
});

app.get('/mb', function (req, res) {
    //console.log(id);
    res.render('mobile.jade', {
        id:'', 
        _title:'Telejogo.JS | Controle'
    });
});

app.get('/color/:id/:color', function (req, res) {
    var id = req.params.id;
    var color = req.params.color;
    sockets[id].emit('changeColor', {
        color: color
    });
    res.send('ok');
});

app.get('/pongjs/:id/:key/:direction', function (req, res) {
    var id = req.params.id;
    var key = req.params.key;
    var direction = req.params.direction;
    if(direction == "up"){
        sockets[id].emit('keyup', {
            key: key
        });
    }else if(direction == "down"){
        sockets[id].emit('keydown', {
            key: key
        });
    }else{
        sockets[id].emit('keyup', {
            key: key
        });
    }
    res.send('ok');
});

app.listen(8000);

var sockets = {};
io.sockets.on('connection', function (socket) {
    socket.on('setId', function (id) {
        console.log("THE ID: " + id);
        sockets[id] = socket;
    });
});