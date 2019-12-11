//create an empty array called balls
let bars = [];
//
let me;

let bar;

let environmentColors = []

let b;

let c;

let d;

let anotherFlotsam = [];

let flotsams = [];

let places = [50, 120, 190, 260, 330, 400, 470, 540, 610, 680, 750];

var turtle;

let straw;
let bag;

let trashImages = [];

//

function preload() {
    turtle = loadAnimation ('sprites/turtle001.png', 'sprites/turtle007.png');
    bag = loadImage ('bag.png');
    straw = loadImage ('straw.png');

}

function setup() {
  imageMode(CENTER);
  createCanvas(800, 600);
  environmentColors = [color(0,132,255),color(2,112,217),color(0,90,173),color(16,99,176),color(23,118,207),color(28,145,255),color(59,160,255),color(46,130,209),color(35,100,161)]
//
  me = new Avatar(400, 300, 4);
  bar = new Bar(-160, 2, environmentColors[0]);
//  b = new Flotsam ();
   trashImages.push(bag);
   trashImages.push(straw);

}

function draw(){
	background(194,178,128);

  bar.drawBar();
  bar.moveBar();


  if (frameCount % 35 == 0) {
      let  b = new Bar(-160, 2, environmentColors[0]);
      bars.push(b);
      //console.log(bars); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < bars.length; i++) {
	 	      bars[i].drawBar();
       	  bars[i].moveBar();
          //anotherFlotsam[i].drawTrash();
          //anotherFlotsam[i].moveTrash();
        }
//
          if (frameCount % 35 == 0) {
     let b = new Flotsam(places[0], -125, -1);
     flotsams.push(b);
     let c = new Flotsam(places[0], -125, -1);
     flotsams.push(c);
     // let d = new Flotsam(places[0], -95, -1);
     // flotsams.push(d);
        }

//	draw all the Turtles in that array
 for (let i = 0; i < flotsams.length; i++) {
         flotsams[i].drawFlotsam();
         flotsams[i].moveFlotsam();
         flotsams[i].restartTurtle();
     }

      me.drawMe();
      me.moveMe();
//      print (me.x,me.y);

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
     else if (keyCode === DOWN_ARROW) {
       me.y += 70;
     }

     return false; // prevent default
 }


//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = 2;
	}

	drawMe(){  // draw the running person
		animation(turtle, this.x, this.y);
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
    noStroke();
    fill(this.eColor);
    rect(-5, this.y, 820, 70);


  }

  //update the location of the bar, so it moves down the screen
  moveBar(){
  //	this.x = this.x;
    this.y = this.y + this.speed;
  }

}

 class Flotsam {
  //These are the floating objects in the ocean. The objects in this code will eventually be replaced by images of trash etc.
  constructor(x,y, speed,dice){ //every avatar needs an x value, a y value, and a speed
		    this.x = places[int(random(0,places.length))];
    		this.y = y;
        this.speed = 2;
        this.dice =  int(random(0,2));
	}

	drawFlotsam(){  // draw the obstacle
    	// randomJetsam(this.x, this.y);
      // function randomJetsam(){
        //let diceRoll = int(random(0,2));
      //  print(diceRoll);

        if (this.dice == 0){
          image(straw,this.x,this.y)
        }
        else{
          image(bag, this.x, this.y)
        }


	}

	moveFlotsam(){
  		this.x = this.x;
  		this.y = this.y+this.speed;
  }

  restartTurtle(){

     // if (this.x-3<= me.x && this.x+3 >=me.x && this.y-3<= me.y && this.y+3 >= me.y){
     if(this.y+35 >= me.y && this.y<=me.y && this.x+35 >= me.x && this.x -35  <me.x+35){
      // me.y = height;
      print("bounced the turtle")
      location.reload();
     }

  }
}
