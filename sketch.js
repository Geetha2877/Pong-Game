function setup() {
  createCanvas(400, 400);
  x = 195
  y = 195
  a = 2
  b = 2
  
}

function draw() {
  background('black');
  p1 = rect(380,mouseY,10,80);
  p2 = rect(10,160,10,80);
  p3 = rect(c=x+a,d=y+b,10,10)
  a = a+1 
  b = b+1
  
}
