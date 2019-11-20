//create an empty array called balls
let bars = [];

//create a variable to hold your avatar
let me;

let bar;

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 4);
  bar = new Bar(-100, 1);

}

function draw(){
	background(220);

  bar.drawBar();
  bar.moveBar();


  if (frameCount % 70 == 0) {
      let  b = new Bar(-100, 1);
      bars.push(b);
      console.log(bars); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < bars.length; i++) {
	 	      bars[i].drawBar();
       	  bars[i].moveBar();
	  }
    me.drawMe();
    me.moveMe();

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("yellow");
        strokeWeight(5);
    		fill("yellow");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x, this.y+30);
	}

	moveMe(){
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move left by speed
       this.x = this.x - this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move right by speed
        this.x += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(0);
    	fill("blue");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x;
		this.y = this.y-this.speed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}

class Bar {
  //These are the background!!!!!
  //every bar needs a speed of descent (y axis), and a y value for a change in position
  constructor(y, speed){
    this.y = y;
    this.speed = speed;
  }

  //draw a bar on the screen at (0,0)
  drawBar(){
    fill("green");
    rect(0, this.y, 500, 70);
  }

  //update the location of the bar, so it moves down the screen
  moveBar(){
  //	this.x = this.x;
    this.y = this.y + this.speed;
  }

}
