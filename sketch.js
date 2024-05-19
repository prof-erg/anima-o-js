function setup() {
    createCanvas(600, 600);
    background(220);
  }
  
  function draw() {
    fill(random(0,255),random(0,255),random(0,255));
   strokeWeight(1);
    circle(random(0,600),random(0,600),random(0,150));
    rect(random(0,600),random(0,600),random(0,150),random(0,150));
   textSize(170);
    fill(color(random(0,255)));
    strokeWeight(4);
    //border-width: 2px 10px 4px 20px; border-style: solid;
   text("2MY",120,300);
  }