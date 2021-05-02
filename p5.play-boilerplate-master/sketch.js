const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup() {
  
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(100, 100, 50, 50);
  box2 = new Box(300, 100, 50, 50);
  box3 = new Box(500, 100, 50, 50);
  box4 = new Box(700, 100, 50, 50);


  ground1 = new Ground(100, 380, 150, 40);
  ground2 = new Ground(300, 380, 150, 40);
  ground3 = new Ground(500, 380, 150, 40);
  ground4 = new Ground(700, 380, 150, 40);

}

function draw() {
  background("green");
  
  Engine.update(engine);

  box2.display();
  box3.display();
  box4.display();
  fill ("yellow");
  ground1.display();
  fill ("red");
  ground2.display();
  fill ("blue");
  ground3.display();
  fill ("purple");
  ground4.display();

  if(box1.body.position.y<300){
    fill("orange");
    box1.display();
}

  if(box1.body.position.y>300){
      fill("yellow");
      box1.display();
  }
  


  if(box2.body.position.y<300){
    fill("orange");
    box2.display();
}

  if(box2.body.position.y>300){
      fill("red");
      box2.display();
  }



  if(box3.body.position.y<300){
    fill("orange");
    box3.display();
}

  if(box3.body.position.y>300){
      fill("blue");
      box3.display();
  }


  
  if(box4.body.position.y<300){
    fill("orange");
    box4.display();
}

  if(box4.body.position.y>300){
      fill("purple");
      box4.display();
  }
}