
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, side1,side2,side3,dustbinImg,dustbinSprite, paper

function preload()
{
	dustbinImg=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1200, 550);
	rectMode(CENTER);

	dustbinSprite=createSprite(1000, 390, 20,20);
	dustbinSprite.addImage(dustbinImg)
	dustbinSprite.scale=.6
	




	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground = new Ground(600, 500,1200,20)

	side1 = new DustPan(1000, 390,20,120)
	side2 = new DustPan(1080, 390,180,20)
	side3 = new DustPan(920, 390,180,20)

	paper = new Paper(200,400, 60,60)
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  dustbinSprite.x= dustbinSprite.position.x 
  dustbinSprite.y= dustbinSprite.position.y 

 
  paper.display()

  ground.display();

  side1.display();
  side2.display();
  side3.display();

  
  

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-85})


		
		
		
	}

	
}
