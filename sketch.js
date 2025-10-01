//custom variables for y-coordinate of sun & horizon
let shapeHeight;

let horizon ;
function setup() {
  createCanvas(windowWidth,windowHeight);
  horizon =height/1.35928;
}

function draw() {

  //shape follows y-coordinate of mouse
  shapeHeight = mouseY;
  currentWidth = mouseX;

  //light blue background if the shape is above horizon

  //with if-else statement
  if (shapeHeight < horizon) {
    background("lightblue"); // blue if above horizon
    
  } else {
    background("purple"); // grey if below horizon
  }

  //sun
  fill("white");
  
  rect(width/4, shapeHeight, width/2);
  textSize(20);
  fill("black");
  text('Hi! My name is Spencer Gardner', currentWidth/2, shapeHeight/2);
  


  // draw line for horizon
  stroke('black');
  line(0,horizon,width,horizon);

  //grass

  fill("green");

  rect(0, horizon, width, height);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  horizon = height / 2; 
}

