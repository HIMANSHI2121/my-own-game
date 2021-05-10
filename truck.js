class Truck{
    constructor(x,y,width,height){
        var options={
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("#E0C193")
        stroke("#E0C193")
        rect(pos.x,pos.y,this.width,this.height);

    }
}