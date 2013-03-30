var id = guid()
var socket = io.connect('http://emiliano.bocamuchas.org:8080');

$("#qr").html('<a href="http://emiliano.bocamuchas.org:10080/mb?id=' + id + 
    '" target="_blank"><img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://emiliano.bocamuchas.org:10080/mb?id=' + id + '&choe=UTF-8" alt="QR Code" /></a>');
$("#qr").after('<a href="http://emiliano.bocamuchas.org:10080/mb?id=' + id +
    '" target="_blank"><img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://emiliano.bocamuchas.org:10080/mb3?id=' + id + '&choe=UTF-8" alt="QR Code" /></a>');



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