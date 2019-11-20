//create an empty array called balls
let bars = [];

//create a variable to hold your avatar
let me;

let bar;

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 4);
  bar = new Bar(-160, 1);

}

function draw(){
	background(92, 188, 214);


  bar.drawBar();
  bar.moveBar();


  if (frameCount % 70 == 0) {
      let  b = new Bar(-160, 1);
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


function keyPressed() {
     if (keyCode === UP_ARROW) {
       me.y = me.y - 70;
     }
     else if (keyCode === RIGHT_ARROW) {
       me.x += 70;
     }
     else if (keyCode === LEFT_ARROW) {
       me.x = me.x - 70;
     }

     return false; // prevent default
   }


//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = 1;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(5);
    		fill("green");
		    ellipse(this.x,this.y,20,20);
	}

	moveMe(){
  		this.x = this.x;
  		this.y = this.y+this.speed;
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
    stroke("black");
    strokeWeight(3);
    fill("white");
    rect(0, this.y, 550, 70);

  }

  //update the location of the bar, so it moves down the screen
  moveBar(){
  //	this.x = this.x;
    this.y = this.y + this.speed;
  }

}
