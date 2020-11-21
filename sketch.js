
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,rect1,rect2,rect3,ball
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,height,1600,20)
	rect1 = new Dustbin(950,550,25,150)
	rect2 = new Dustbin(1050,625,200,25)
	rect3 = new Dustbin(1150,550,25,150)
	ball = new Paper(150,650,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  rect1.display()
  rect2.display()
  rect3.display()
  ball.display()
 
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:200,y:-200});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:-200,y:-200});
	}
}

