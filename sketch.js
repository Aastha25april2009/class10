var ground, trex , trexrun
var groundimg
function preload(){
groundimg = loadImage("ground2.png");
trexrun = loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
createCanvas(600,200)
ground = createSprite(300,180,600,10);
ground.addImage(groundimg)
ground.velocityX= -5;
trex = createSprite(50,160,20,50)
trex.addAnimation("running",trexrun)
trex.scale = 0.6;
createEdgeSprites()
}

function draw(){
background("lightGrey")
if(ground.x<0){
ground.x=ground.width/2
}
if(keyDown("space")){
  trex.velocityY = -10
}
trex.velocityY = trex.velocityY + 0.8
trex.collide(ground)
  drawSprites()
}