var WIDTH = 700;
var HEIGHT = 500;
var BALL_RADIUS = 20;
var PAD_WIDTH = 8;
var PAD_HEIGHT = 80;
var HALF_PAD_WIDTH = PAD_WIDTH / 2;
var HALF_PA_HEIGHT = PAD_HEIGHT / 2;

var paddle1_vel;
var paddle2_vel;
var w;
var s;
var _canvasContext;
var CANVAS_ELEMENT_ID = 'tela';
var _pause = false;


function createFrame(n,w,h){
    drawRect(0,0,w,h);
}
function startFrame(){
    if(!_pause){
        getCanvasContext().clearRect(0, 0, WIDTH, HEIGHT);
        draw();
    }
    setTimeout('startFrame()',1000 / 60);
}

function ball_init(right){
    var test = null;
    w1 = 5;
    w2 = 5;
    s1 = 5;
    s2 = 5;
    ball_pos=[WIDTH/2, HEIGHT/2];

    if(right===1){
        test = randRange(2,5);
    }else{
        test = randRange(2,5);
        test =- test;
    }
    ball_vel = [test, randRange(1,4)];
}

function init(){
    count1= 0;
    count2 = 0;
    paddle1_pos = [HALF_PAD_WIDTH, 0];
    paddle2_pos = [WIDTH - HALF_PAD_WIDTH, 0];
    paddle1_vel = 0;
    paddle2_vel = 0;
    ball_init(randRange(-1, 2));
}

function draw(c){
    radius = 12;

    paddle1_pos[1] = paddle1_pos[1]+paddle1_vel;
    paddle2_pos[1] = paddle2_pos[1]+paddle2_vel;

    paddle1_pos[1] = (paddle1_pos[1]<=0)?0:paddle1_pos[1];
    paddle1_pos[1] = (paddle1_pos[1]>=HEIGHT-PAD_HEIGHT)? HEIGHT-PAD_HEIGHT:paddle1_pos[1];

    paddle2_pos[1] = (paddle2_pos[1]<=0)?0:paddle2_pos[1];
    paddle2_pos[1] = (paddle2_pos[1]>=HEIGHT-PAD_HEIGHT)? HEIGHT-PAD_HEIGHT:paddle2_pos[1];

    drawLine([WIDTH/2, 0],[WIDTH/2,HEIGHT],1,"White");
    drawLine([PAD_WIDTH, 0],[PAD_WIDTH, HEIGHT], 1, "White");
    drawLine([WIDTH - PAD_WIDTH, 0],[WIDTH - PAD_WIDTH, HEIGHT], 1, "White");

    drawLine([paddle1_pos[0], paddle1_pos[1]],[paddle1_pos[0],paddle1_pos[1]+ PAD_HEIGHT], PAD_WIDTH, "White");
    drawLine([paddle2_pos[0], paddle2_pos[1]],[paddle2_pos[0], paddle2_pos[1]+PAD_HEIGHT], PAD_WIDTH, "White");

    ball_pos[0] = ball_pos[0]+ball_vel[0];
    ball_pos[1] = ball_pos[1]+ball_vel[1];
    if(ball_pos[0]<=paddle1_pos[0]+radius+HALF_PAD_WIDTH &&
        ball_pos[1]>=paddle1_pos[1] &&
        ball_pos[1]<=paddle1_pos[1]+PAD_HEIGHT){
        ball_pos[0] == paddle1_pos[0];
        ball_vel[0] = ball_vel[0]*-1.1;
        ball_vel[1] = ball_vel[1]*1.1;
    }

    if(ball_pos[0]>=paddle2_pos[0]-radius-HALF_PAD_WIDTH &&
        ball_pos[1]>=paddle2_pos[1] &&
        ball_pos[1]<=paddle2_pos[1]+PAD_HEIGHT){
        ball_pos[0]==paddle2_pos[0];
        ball_vel[0]=ball_vel[0]*-1.1;
        ball_vel[1]=ball_vel[1]*1.1;
    }

    if(ball_pos[1]<=radius){
        ball_pos[1]=radius;
        ball_vel[1]=ball_vel[1]*-1;
    }else if(ball_pos[1]>=HEIGHT-radius){
        ball_pos[1]=HEIGHT-radius;
        ball_vel[1]=ball_vel[1]*-1;
    }
    if(ball_pos[0]>=WIDTH-radius){
        count1=count1+1;
        ball_init(0);
    }
    if(ball_pos[0]<=radius){
        count2=count2+1
        ball_init(1)
    }

    drawCircle(ball_pos[0], ball_pos[1], radius, 8, "White");
    drawText(count1, [WIDTH/4, HEIGHT/4], 36, "White");
    drawText(count2, [3*WIDTH/4, HEIGHT/4], 36, "White");

}

function keydown(key){
    Dbg.log('keydown', key);
    if(key==="down"){
        s1=s1+1;
        paddle1_vel=s1;
    }else if (key==="s"){
        s2=s2+1;
        paddle2_vel=s2;
    }else if(key==="w"){
        s2=s2+1;
        paddle2_vel=-s2;
    }else if(key==="up"){
        s1=s1+1;
        paddle1_vel=-s1;
    }
}

function keyup(key){
    Dbg.log('keyup', key);
    if (key==="down"){
        s2=w2;
        paddle1_vel=0;
    }else if(key==="s"){
        s1=w1;
        paddle2_vel=0;
    }else if(key==="w"){
        s2=w2;
        paddle2_vel=0;
    }else if(key==="up"){
        s1=w1;
        paddle1_vel=0;
    }
}

function addButton(){
    init();
    _pause = false;
    startFrame();
}
function pauseButton(){
    _pause = !_pause;
    drawText('pausado', [WIDTH/2-50, HEIGHT/2-20], 36, "White");
}
createFrame("Pong", WIDTH, HEIGHT);
//setDrawHandler("draw");
//setKeyDownHandler("keydown");
//setKeyUpHandler("up");
//setAddButton("Restart", init, 100);

init();
draw();
//frame.start();
ball_init(0);

function getLetter(which){
    var letter;
    switch(event.which){
        case 87:
            letter = "w";
            break;
        case 83:
            letter = "s";
            break;
        case 38:
            letter = "up";
            break;
        case 40:
            letter = "down";
            break;
        default:
            letter = null;
            break;
    }
    return letter;
}

$(document).ready(function(){
    $(window).keydown(function(e){
        keydown(getLetter(e.which));
    });
    $(window).keyup(function(e){
        keyup(getLetter(e.which));
    });
    $(".btn.start").click(function(){
        addButton();
    });
    $(".btn.restart").click(function(){
        pauseButton();
    });

});