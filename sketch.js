
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;


var stone;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

stone=new Stone(x,y,50,50)


	Engine.run(engine);
  
}


function draw() {
	background("black");
  
	Engine.update(engine)

  rectMode(CENTER);

stone.display()
  
  drawSprites();
 
}



