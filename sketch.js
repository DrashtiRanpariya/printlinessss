let x = 0;
let y = 0;
let spacing = 50;
let r = 255;
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(-50)
}

function draw(){
  strokeWeight(2);
  stroke(r);
  if (random(1)<0.5){
  line(x , y, x+spacing, y+spacing);
}else{
  line(x, y+spacing , x+spacing , y);
}
x= x + 50;
if(x > width){
  x=0;
  y= y + spacing;
}
}














