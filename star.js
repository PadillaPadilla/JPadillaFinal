class Star {
  constructor(x, y, xSpeed, ySpeed, r, g, b) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.r = r
    this.g = g
    this.b = b
    
  }

 

  display() {
    circle(this.x, this.y, 3);
    fill(this.r, this.b, this.g)
    noStroke()
  }
   move() {
    this.x += this.xSpeed;
     this.y += this.ySpeed;
if (this.y>=300){
  this.y=0
  this.x=random(0,200)
  this.ySpeed=(random(0,5))
  this.xspeed=(random(-3,3))
}
    }
    
}
