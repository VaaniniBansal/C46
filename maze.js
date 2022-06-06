class Maze{
    constructor(x,y,width){
        var options={
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height;
        this.image=loadImage("images/metal plate.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        stroke("brown");
        strokeWeight(5);
        fill("yellow");
        image(this.image,pos.x,pos.y,this.width,this.height);
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        
    }
}