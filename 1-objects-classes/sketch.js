//create a variable to hold one ball
let b;
let anotherBall;
let bug;


function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red", 1/5); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green", 2);
  bug = new Turtle(30, 30, "purple", 1/12);
}


function draw(){
	background(110, 110, 255);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    bug.drawTurtle();
    bug.moveTurtle();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color,speed){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.speed= speed;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x + this.speed + 2;
		this.y = this.y+.5;
	}

}

class Turtle {

  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;

  }
  drawTurtle(){
      stroke(2);
      fill(this.color);
      ellipse(this.x,this.y,20,45);
  }
  moveTurtle(){
    this.x = this.x+3;
  }

}
