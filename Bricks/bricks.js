var canvas = document.getElementById("canvas");
var brush = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = (Math.random()*10)-5;
var dy = -5;
var paddleWidth = 100;
var paddleHeight = 20;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickHeight = 20;
var brickWidth = 100;
var brickPadding = 12;
var offsetLeft = 27;
var offsetTop = 30;
var brick =[];
var brickRow = 5;
var brickColumn = 5;
 for(c=0;c<brickColumn;c++){
 	brick[c] =[];
 	for(r=0;r<brickRow;r++){
 		brick[c][r] = {x:0,y:0,status:1}
 	}
 }
 var count = 0;
 

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e){
	
    if (e.keyCode == 39){
    	rightPressed = true;
    }

    else if (e.keyCode == 37){
    	leftPressed = true;
    }
}

function keyUpHandler(e){
if (e.keyCode == 39){
    	rightPressed = false;
    }

    else if (e.keyCode == 37){
    	leftPressed = false;
    }
}

function brickdraw(){
	for(c=0;c<brickColumn;c++){
		for(r=0;r<brickRow;r++){
			if(brick[c][r].status == 1){
			var brickX = (offsetLeft + c*(brickWidth+brickPadding));
			var brickY = (offsetTop + r*(brickHeight+brickPadding));
			
			brick[c][r].x = brickX;
			brick[c][r].y = brickY;
			brush.beginPath();
			brush.rect(brickX,brickY,brickWidth,brickHeight);
			brush.fillStyle = "black";
			brush.fill();
			brush.closePath();
		}

		}
	}
}

 function collision()
 {
 	for (c=0;c<brickColumn;c++)
 	{
 		for(r=0;r<brickRow;r++)
 		{
 			

 			var b = brick[c][r];
 			if(b.status ==1){
 			if(x>b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
 			{
 				dy = -dy;
 				b.status = 0;

 				count++
 				if(count==25){
 				  alert("You Win");
			      document.location.reload();
			      
			      
 				}
 				
 			}
 		}
 		}
 	 
 	}
 }

function ball(){	
brush.beginPath();
brush.arc(x,y,ballRadius,0,Math.PI*2,false);
brush.fillStyle = "black";
brush.fill();
brush.closePath();
}

function paddle(){
	brush.beginPath();
	brush.rect(paddleX,(canvas.height-paddleHeight),paddleWidth,paddleHeight);
	brush.fillStyle ="black";
	brush.fill();
	brush.closePath();
}


function draw(){
brush.clearRect(0,0,canvas.width,canvas.height);
ball();
paddle();
brickdraw();
collision();

if(x<ballRadius|| x>canvas.width-ballRadius){
	dx = -dx;
}

if(y<ballRadius){
      dy = -dy;
  }  
	if(y>canvas.height-paddleHeight-ballRadius){
		if(x > paddleX && x < (paddleX + paddleWidth)){
			dy = -dy;
		}
		else if(y>canvas.height+ballRadius)
		{ 
			alert("GAME OVER");
			document.location.reload();
		}
	}

if( rightPressed && paddleX<canvas.width-paddleWidth){
	paddleX = paddleX + 5;
} 

 if( leftPressed && paddleX>0) {
	paddleX = paddleX - 5;
}

x = x + dx;
y = y + dy;

requestAnimationFrame(draw);
}
draw();
