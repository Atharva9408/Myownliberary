var mr;
var fr;
var O1;
var O2;

function setup() {
  createCanvas(800,800);
  fr=createSprite(400, 100, 50, 50);
  fr.shapeColor="lightblue"
  mr=createSprite(400, 600, 80, 30);
  mr.shapeColor="lightblue"
  O1=createSprite(100, 300, 70, 60);
  O1.shapeColor="blue"
  O2=createSprite(300, 100, 50, 20);
  O2.shapeColor="blue"
  mr.velocityY=-5;
  fr.velocityY=5;
}

function draw() {
  background(255,255,255); 
  O2.x=World.mouseX; 
  O2.y=World.mouseY;
  console.log(mr.x-fr.x);
  
  if(isTouching(O2,O1)){
    O2.shapeColor="red";
    O1.shapeColor="red";
  }
  else{
    O1.shapeColor="blue";
    O2.shapeColor="blue";
  }
  //bounseOff(mr,fr);
  collide(mr,fr);
  drawSprites();
}

