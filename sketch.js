let stars = [];

function setup() {
  createCanvas(300, 300);
  background(0,255)

  for(let i = 0; i < 50; i++) {
    stars[i] = new Star (random(-50,0), random(-50,-300), random(-3,3), random(0,5),random(200,255),random(200,255),random(180,235));
    
  text('Jacob Padilla',225,290)
  fill(255);
  stroke(4);
  strokeWeight(4);
  }
}

function draw() {

  for(let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
    
}
}

