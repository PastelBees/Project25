class Paper{

    constructor(x, y, width, height) {
        var options = {
          isStatic: false,
          restitution: 0.5,
          friction:0.7,
          density:1.2
        }

        this.radius=20
        this.x=x
        this.y=y
        this.x=x
        this.width=width
        this.height=height
        this.y=y
        this.body=Bodies.circle(x,y,20, options);
       
        this.image=loadImage("sprites/paper.png")
        
        World.add(world,this.body)
        
}

display(){
    var pos =this.body.position;
    var angle=this.body.angle
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    imageMode(CENTER);
    fill(255,0,255);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }

}