class Cir{
    constructor(x,y,width,height){
        var options={
        }
        this.image = loadImage("images/preview.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill("#E0C193")
        stroke("#E0C193")
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}