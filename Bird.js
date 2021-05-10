class Bird{
    constructor(x,y,w,h){
  this.x=x;
  this.y=y;
  this.width=w;
  this.height=h;
  this.a= createSprite(this.x,this.y,this.w,this.h);
  this.a.addImage(birdImg);
    }
display(){
if(keyDown("space") && this.a.y>300){
  this.a.velocityY=-10;
}
this.a.velocityY+=0.8;
this.a.collide(invisibleground);
this.a.debug=true;
this.a.setCollider("circle",0,-15,100);

 }
}