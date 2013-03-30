Dbg = {
    log: function(k,v){
        if(window.console && window.console.log)
            console.log(k,v);
        else
            alert(k+': '+v);
    }
}

function randRange (min, max) {
    return Math.random() * (max - min) + min;

}

function getCanvasContext(idElement){
    if (idElement === undefined) {
        idElement = CANVAS_ELEMENT_ID;
    }
    if(_canvasContext !== null && _canvasContext !== undefined){
        return _canvasContext;
    }

    var c = document.getElementById(idElement);
    $("#"+idElement).css("width",WIDTH+"px").css("height",HEIGHT+"px");
    if (c.getContext){
        _canvasContext = c.getContext('2d');
        return _canvasContext;
    }else{
        throw "Não serei capaz de desenhar aqui.";
    }

}
function drawLine(p1, p2, b, c){
    getCanvasContext().lineWidth = b;
    getCanvasContext().strokeStyle = c;
    getCanvasContext().beginPath();
    getCanvasContext().moveTo(p1[0],p1[1]);
    getCanvasContext().lineTo(p2[0],p2[1]);
    getCanvasContext().stroke();
}
function drawCircle(x, y, r, d, c){
    getCanvasContext().strokeStyle = c;
    getCanvasContext().beginPath();
    getCanvasContext().arc(x,y,r,0,Math.PI*2,true);
    getCanvasContext().stroke();
}
function drawText(text, p1, s, c){
    getCanvasContext().font = s +"px Times New Roman";
    getCanvasContext().fillStyle = c;
    getCanvasContext().fillText(text, p1[0], p1[1]);
}
function drawRect(x, y, w, h){
    return;
    getCanvasContext().fillRect(x,y,w,h);
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

function guid() {
    return s4() + s4() + '-' + 
           s4() + '-' + 
           s4() + '-' +
           s4() + '-' + 
           s4() + s4() + s4();
}
function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r.push(m[1]);
   return r;
}
function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create) // If Object.create() is defined...
        return Object.create(p); // then just use it.
    var t = typeof p; // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}