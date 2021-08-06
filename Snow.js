class Snow{
    constructor(x,y,r){
   var options ={
       restitution: 0.5
   }

   this.body = Bodies.circle(x,y,r,options);
   this.r = r;
   this.image = loadImage("snow4.webp");
   World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var ag = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(ag);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}