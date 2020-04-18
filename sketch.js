var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(400,400,80,40);
  fixedRect.velocityY = -5;
  fixedRect.shapeColor = "cyan";
  fixedRect.debug="true";

  movingRect = createSprite(300,200,80,40);
  movingRect.velocityY = 5;
  movingRect.shapeColor = "cyan";
  movingRect.debug = "true";
}

function draw() {
  background(255,255,255);  
  
  console.log(movingRect.x-fixedRect.x);

  if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
  {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }

  if (movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
 {
   movingRect.velocityY = movingRect.velocityY*(-1);
   fixedRect.velocityY = fixedRect.velocityY*(-1);
 }


  
  drawSprites();
}