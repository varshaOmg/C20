var fixedRect ,movingRect






function setup() {
  createCanvas(800,400);
fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor = 'red'
movingRect = createSprite(700, 200, 50, 50);
movingRect.shapeColor = 'red'
movingRect.velocityX = -3;


}

function draw() {
  background("black");
  
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){

      movingRect.velocityX = 3;

  }

  


  drawSprites();
}