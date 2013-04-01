

var id = guid()
var socket = io.connect(URL_SOCKET);

$(".text.input.id").val(id);

socket.emit('setId', id);
socket.on('keydown', function (data) {
    keydown(data.key);
//keyup(data.action);
});
socket.on('keyup', function (data) {
    keyup(data.key);
//keyup(data.action);
});
socket.on('changeColor', function (data) {
    changeColor(data.color);
});