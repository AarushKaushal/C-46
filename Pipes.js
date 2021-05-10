class Pipes {
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        
}
display(){
    if(frameCount%60===0){
 var a= createSprite(this.x,this.y,this.w,this.h)
 a.velocityX=-4;
 score+=0.5;
}
}
}