function setup() {
  var canvas =  createCanvas(300, 300);
  canvas.id(0);
  canvas.parent('contenedor1');
}


function draw() {
  background(255, 0, 0);
  fill(200);
  rect(100,100,width/2,height/2);
  fill(200,100,200);
  ellipse(100,100,50,50); 

  
}