
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof1;
let rope1,rope2,rope3,rope4,rope5;
var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,200,700,30);
	//bob1 = new Bob(140,400,50);
	//bob2 = new Bob(280,400,50);
	//bob3 = new Bob(420,400,50);
	bob1 = new Bob(220,400,50);
	bob2 = new Bob(320,400,50);
 	bob3 = new Bob(420,400,50);
	//bob4 = new Bob(560,400,50);
	//bob5 = new Bob(700,400,50);
	//rope1 = new Rope(bob1.Body,roof1.body,bobDiameter*2,0);
	//rope2 = new Rope(bob2.Body,roof1.body,bobDiameter*2,0);
	//rope3 = new Rope(bob3.Body,roof1.body,bobDiameter*2,0);
	//rope4 = new Rope(bob4.Body,roof1.body,bobDiameter*2,0);
	//rope5 = new Rope(bob5.Body,roof1.body,bobDiameter*2,0);
	bob4 = new Bob(520,400,50);
	bob5 = new Bob(620,400,50);
	rope1 = new Rope(bob1.body,roof1.body,-bob1.body.circleRadius*4,0);
	rope2 = new Rope(bob2.body,roof1.body,-bob1.body.circleRadius*2,0);
	rope3 = new Rope(bob3.body,roof1.body,0,0);
	rope4 = new Rope(bob4.body,roof1.body,bob1.body.circleRadius*2,0);
	rope5 = new Rope(bob5.body,roof1.body,bob1.body.circleRadius*4,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof1.display(); 
  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
//function keyPressed(){
	//if (keyCode === UP_ARROW){
		//Matter.Body.applyForce(bob1.body.position,{x:97,y:-97});
		//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:+400});
	//}
function keyPressed(){
	  if (keyCode === LEFT_ARROW){
	    Body.applyForce(bob1.body,bob1.body.position,{x: -300, y: -300});
	}
}