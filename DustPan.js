class DustPan {
    constructor(x, y, height,width) {
      var options = {
        isStatic: true
      }
      this.width =width;
      this.height = height;
      this.x =x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, width, height, options);

   
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(230);
      stroke(230)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  