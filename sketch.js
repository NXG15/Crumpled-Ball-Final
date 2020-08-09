
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	bottom = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Bodies
	ball = new Paper(60,435);

	can1 = new Ground(670,405,20,100);
	can2 = new Ground(550,405,20,100);
	can3base = new Ground(610,458,130,20);
	

	ground = new Ground(400,475,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
  

  ball.display();
  can1.display();
  //can1.shapeColor = color("white");
  can2.display();
  can3base.display();
  imageMode(CENTER);
  image(bottom,can3base.body.position.x,can3base.body.position.y-90,150,200);
  

  ground.display();
  //drawSprites();
 
  //keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:147,y:-147});
	}
}

