
;( function( w,d ){

var vDOM = {
    canvas : d.querySelector(".canvas"),
    start : d.querySelector(".start_button"),
    stop : d.querySelector(".stop_button"),
    score : d.querySelector(".score"),
};

var PointMovable = function(_x,_y,_speed) {
    var x = _x;
    var y = _y;
    var speed = _speed ;  


    this.getx = function () {
        return x;
    };
    this.gety = function () {
        return y;
    };
    
    this.down = function() {
        y += speed;

    };
};

var SquareMovableColored = function ( _x,_y,_a,_speed,_color ) {
    this.leftTopPoint = new PointMovable(_x,_y,_speed);
    this.side = _a || 1;
    this.color  = _color || "#000000";
};

SquareMovableColored.prototype.down = function() {
        this.leftTopPoint.down();
};

function  random(from,to,acc){//acc i.e. accuracy after dot
    return !!acc ? +(  Math.random() * to + from  ).toFixed(acc) : Math.floor( Math.random() * to + from  );
};

function randomHexColor(){
    return  "#" +  random(0,Math.pow(16,6) - 1,0).toString(16);
};

var Game = (function( _squareSize,_canvasName,_squaresNumber,_minspeed,_maxspeed,_color ){

    var canvas = vDOM.canvas || d.querySelector(_canvasName);
    var squareSize = _squareSize || 20;
    var squaresNumber = _squaresNumber || 25 ;

    var ctx = canvas.getContext("2d");

    var squares = [];
    var score = 0;
    var running = false;

    function fillSquares( n ){
        for(var i = 0; i < n ; i += 1){
            squares.push(new SquareMovableColored( random(0,canvas.clientWidth - squareSize ),-1 * squareSize,squareSize, random(0.1  , 0.5 ,2 ), _color || randomHexColor() ) );
        };
    };

    function fallSquares() {
        squares.forEach(function(sq) {
            sq.down();
        });
    };

    function filterSquares(){
        var cch = canvas.clientHeight;

        squares = squares.filter(function(sq) {
            return sq.leftTopPoint.gety() <= cch; 
        });
    };

    function clearCtx(){
        ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    };

    function paintSquares( ){
        clearCtx();
        squares.forEach(function(sq){
            ctx.fillStyle  = sq.color;
            ctx.fillRect( sq.leftTopPoint.getx(),sq.leftTopPoint.gety(),sq.side,sq.side );
        });

        filterSquares();
        fallSquares();        
        fillSquares(squaresNumber - squares.length);        


        if(running){
            requestAnimationFrame(paintSquares);
        }else{
            clearCtx();
        };
    };

    function cursorPosition(cursor) {  
        return { x: cursor.clientX, y : cursor.clientY };
    };

    function oneWayBindScore() {
        vDOM.score.innerText = score;
    };

    function clickSquare(_position) {
        squares.forEach( function(sq,i){
            var obesity = canvas.getBoundingClientRect();

            var sqLeftTopPosition = { x : sq.leftTopPoint.getx() + obesity.left, y : sq.leftTopPoint.gety() + obesity.top };
            
            if( sqLeftTopPosition.x <= _position.x &&
                sqLeftTopPosition.x + squareSize >= _position.x &&
                sqLeftTopPosition.y <= _position.y &&
                sqLeftTopPosition.y + squareSize >= _position.y  ){

                    squares.splice(i, 1);
                    score += 1;

                    oneWayBindScore();
                };    
        });    
    };

_public = {
    run : function() {
        if(!running){
            running = true;
            fillSquares(squaresNumber);
            paintSquares();
        };
    },
    stop : function(){
      if(running){
          running = false;
        };
        squares.length = 0;//clear array
        score = 0;
        oneWayBindScore();
    },
    watch : function(_mouseevent) {
        if(running){
            clickSquare(  cursorPosition(_mouseevent) );
        };
    }, 
};

var Res = function(){};
Res.prototype = _public;
return Res;

})(30,null,50);

var g = new Game();

vDOM.canvas.addEventListener("mousedown",g.watch);
vDOM.start.addEventListener("click",g.run);
vDOM.stop.addEventListener("click",g.stop);

})(window,document);

