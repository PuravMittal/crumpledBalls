//creates physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creates variable
var dustbinObj, paperObject,groundObject,myEngine;
var myWorld;

function setup() {
	//creates canvas
	createCanvas(1600, 700);

	//creates rect at center
	rectMode(CENTER);
    
	//creates own physics engine
	myEngine = Engine.create();
	myWorld = myEngine.world;

	//creates paper object
	paperObject=new paper(270,40,20);

	//creates ground
	groundObject=new ground(width/2,670,width,20);

	//creates dustbin
	dustbinObj=new dustbin(1200,650);
	
	//performs key presssing function
	keyPressed()

	//runs my engine
	Engine.run(myEngine);
}


function draw() {
	rectMode(CENTER);

	//gives color to background and prevents it from repeating
	background(150);

	//displays objects 
	paperObject.display();
	dustbinObj.display();
	groundObject.display();

}

function keyPressed(){
	//performs function when up key is pressed
	if(keyCode===UP_ARROW){
		//applies force on paper 
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}