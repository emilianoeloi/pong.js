var io = require('socket.io').listen(8080);
var express = require("express");
var app = express();

var URL = "http://emiliano.bocamuchas.org/pong.js/";
var URL_EXPRESS = "http://emiliano.bocamuchas.org:8000/";
var URL_SOCKET = "http://emiliano.bocamuchas.org:8080";

app.set('view engine', 'jade');

app.set('view options', {
    layout:true
});


app.get('/mb/:id/:joystick/:language', function (req, res) {
	var id = req.params.id;
    var joystick = req.params.joystick;
    var language = req.params.language;
    sockets[id].emit('setConnected', {
        joystick: joystick
    });
    res.render('mobile.jade', {
        _id: id,
        _joystick: joystick,
        _language: language,
        _url: URL,
        _urlExpress: URL_EXPRESS,
        _urlSocket: URL_SOCKET
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
