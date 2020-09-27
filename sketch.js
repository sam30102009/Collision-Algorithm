var r1;
var r2;

function setup() {
  createCanvas(800,400);
r1 = createSprite(200,200,20,20);
r1.shapeColor = 'red';
r2 = createSprite(200,300,20,20)
r2.shapeColor = 'red';
}

function draw() {
  background(0);  
  r1.x = World.mouseX
  r1.y = World.mouseY
  
  if(r1.x - r2.x < r1.width/2  +  r2.width/2 && r2.x - r1.x < r1.width/2  +  r2.width/2 && 
    r1.y - r2.y < r1.height/2  +  r2.height/2  && r2.y - r1.y < r1.height/2  +  r2.height/2){
    r1.shapeColor = 'blue';
    r2.shapeColor = 'blue';
  } else{
    r1.shapeColor = 'red';
    r2.shapeColor = 'red';
  }
  drawSprites();
}