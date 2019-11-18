//create an empty array called Turtles
let Turtles = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 4);

}

function draw(){
	background(92, 188, 214);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let b = new Turtle(random(0,width), 0, -1);
      Turtles.push(b);
      console.log(Turtles); //print the Turtles array to the console
    }

//	draw all the Turtles in that array
	for (let i = 0; i < Turtles.length; i++) {
	 	      Turtles[i].drawTurtle();
       	  Turtles[i].moveTurtle();
        	Turtles[i].bounceTurtle();
	  }

}

function keyPressed() {
     if (keyCode === UP_ARROW) {
       me.y = me.y - 50;
     }
     else if (keyCode === RIGHT_ARROW) {
       me.x += 50;
     }
     else if (keyCode === LEFT_ARROW) {
       me.x = me.x - 50;
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



    // if (keyIsPressed(UP_ARROW)) { //if you hold the up arrow, move left by speed
    //    this.y = this.y - 15;
    // }
    //
    // if (keyIsPressed(RIGHT_ARROW)) { //if you hold the up arrow, move left by speed
    //    this.x += this.speed;
  	// }
//
//   if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move left by speed
//      this.x = this.x - this.speed;
//    }
 }


}


//Turtle class from which to create new Turtles with similar properties.
class Turtle {

	//every Turtle needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a Turtle on the screen at x,y
	drawTurtle(){
    	stroke(0);
      strokeWeight(0);
    	fill("blue");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the Turtle, so it moves across the screen
	moveTurtle(){
		this.x = this.x;
		this.y = this.y-this.speed;
	}

	//if the Turtle hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceTurtle(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}
