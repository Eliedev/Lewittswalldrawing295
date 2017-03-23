function setup() {
  createCanvas(800,800);
  background(65);
  strokeWeight(2);
  stroke(255);
  noFill();
}



function draw() {
 background(65); 
  
  if (mouseIsPressed == true) {
    stroke(random(255));
  }
  
  //triangle(72, 720, 718, 720, 395, 72);
  ellipse(395, 395, 648, 648);
  //square
  rect(70, 70, 650, 650);
  //rectleft
  rect(70, 70, 162, 650);
  line(232, 70, 70, 720);
  rect(558, 70, 162, 650);
  //rect right
  line(720, 70, 558, 720);
  line(558, 70, 720, 720);
  
  
  for (var  i = 40; i < 690; i += 9) {
    //background(25);
    noFill();
   line(72, 720, 395, mouseY + i);
   line(395, mouseY + i, 720, 720);
  }
}