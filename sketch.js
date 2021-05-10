var bg, bgImg;
var bird, birdImg;
var invisibleground;
var score = 0;
var pipe1,pipe2;
var gameState=1;
function preload(){
  bgImg = loadImage("bg.png");
  birdImg = loadImage("bird.png");
}
function setup(){
  var canvas =createCanvas(1200,800);
  bg= createSprite(100,400,1200,800);
  bg.addImage(bgImg);
  bg.scale=2.5;
  bg.velocityX=-4;
  bird = new Bird(100,450,10,10);
  pipe1 = new Pipes(700,150,100,300);
  pipe2 = new Pipes(700,650,100,300);
  invisibleground = createSprite(600,800,1200,20)
}
function draw(){
  background("blue");
 var edges = createEdgeSprites();
  fill("black") 
  strokeWeight(5);
  textSize(50)
if(gameState===1){
  if(bg.x<200){
    bg.x=bg.width/2
  }
  pipe1.display();
  pipe2.display();
  bird.display();
  if(bird.x===pipe1.x && bird.y=== pipe1.y || bird.y===pipe2.y && bird.x===pipe2.x ){
    gameState=0;
    }

}else if(gameState===0){
  console.log("hello");
}
  drawSprites();
  text("Score :"+score,500,250);
}