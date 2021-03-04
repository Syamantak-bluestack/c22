var fairy,fairyImage;
var back,backImage;
var star , starImage;

function preload()
{
   fairyImage=loadImage("fairy1.png");
   backImage=loadImage("starnight.png");
   starImage=loadImage("star.png");
}

function setup() {
	createCanvas(800, 750);

  back=createSprite(800,750);
  back.addImage(backImage);

  star=createSprite(700,75,10,10);
  star.addImage(starImage);
  star.scale=0.1;

  fairy=createSprite(250,650,10,10);
  fairy.addImage(fairyImage);
  fairy.scale=0.4;

}


function draw() {
 

  if(keyDown(LEFT_ARROW)){
    fairy.x=fairy.x-10
  }
  if(keyDown(RIGHT_ARROW)){
   fairy.x=fairy.x+10;
  }
   if(keyDown(DOWN_ARROW)){
	star.velocityY=2;

  if(star.isTouching(fairy))
  {
	
    star.velocityY=0;
	 
  }

  }
  drawSprites()
   
}
