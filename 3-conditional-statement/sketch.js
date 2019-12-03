//create an empty array called balls
let bars = [];

//create a variable to hold your avatar
let me;

let bar;

let environmentColors = []

let t;

let anotherFlotsam = [];

//
function setup() {
  createCanvas(500, 400);
  environmentColors = [color(0,132,255),color(2,112,217),color(0,90,173),color(16,99,176),color(23,118,207),color(28,145,255),color(59,160,255),color(46,130,209),color(35,100,161),color(255,2,225)]
  t = new Flotsam(0, 100);
  anotherFlotsam = new Flotsam(200,20);
  me = new Avatar(width/2, 300, 4);
  bar = new Bar(-160, 1, environmentColors[0]);
}

function draw(){
	background(194,178,128);
  t.drawTrash(); //draw the ball called b (go look in the Ball class for the drawBall function)
  t.moveTrash(); //move the ball called b (go look in the Ball class for the moveBall function)
  anotherFlotsam.drawTrash();
  anotherFlotsam.moveTrash();
  bar.drawBar();
  bar.moveBar();


  if (frameCount % 70 == 0) {
      let  b = new Bar(-160, 1, environmentColors[0]);
      bars.push(b);
      console.log(bars); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < bars.length; i++) {
	 	      bars[i].drawBar();
       	  bars[i].moveBar();
          //anotherFlotsam[i].drawTrash();
          //anotherFlotsam[i].moveTrash();
	  }


    t.drawTrash();
  //  t.moveTrash();

    anotherFlotsam.drawTrash();
  //  anotherFlotsam.moveTrash();

    // if (frameCount % 70 == 0) {
    //     let  t = new Flotsam(-160, 1);
    //     bars.push(t);
    //     console.log(trashs); //print the balls array to the console
    //   }

    // for (let i = 0; i < 50; i++) {
	  //   anotherFlotsam[i].drawTrash();
    //   anotherFlotsam[i].moveTrash();
	  // }

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
    		stroke("black");
        strokeWeight(1);
    		fill("white");
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
  constructor(y, speed, eColor){
    this.y = y;
    this.speed = speed;
    this.eColor = environmentColors[int(random(0,environmentColors.length))];
  }

  //draw a bar on the screen at (0,0)
  drawBar(){
    stroke("black");
    strokeWeight(1);
    fill(this.eColor);
    rect(-5, this.y, 550, 70);


  }

  //update the location of the bar, so it moves down the screen
  moveBar(){
  //	this.x = this.x;
    this.y = this.y + this.speed;
  }

}

 class Flotsam {
  //These are the floating objects in the ocean. The objects in this code will eventually be replaced by images of trash etc.
  constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = 1;
	}

	drawTrash(){  // draw the obstacle
    		stroke("black");
        strokeWeight(1);
    		fill("red");
		    ellipse(this.x,this.y,10,10);
	}

	moveTrash(){
  		this.x = this.x;
  		this.y = this.y+this.speed;
  }
}
