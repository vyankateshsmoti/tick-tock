var hr  ;
var min ;
var sec ;
var secAngle,minAngle,hrAngle;
var bg;

function setup() {
  createCanvas(1300,500);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
  bg = loadImage("black")
 
}

function draw() {
  background("black");  
  
  fill("white");


  textSize(20)
  text("12",250,100)
  
  textSize(20)
  text("3",360,215)

  textSize(20)
  text("6",250,330)

  textSize(20)
  text("9",140,215)

  textSize(80);
  fill("magenta")
  text("T I C K  T O C K",530,100)

  fill("red")
rect(600,140,20,20)

textSize(20)
text("R E P R E S E N T  M I N U T E  H A N D",630,160)

fill("yellow")
rect(600,170,20,20)

textSize(20)
text("R E P R E S E N T  S E C O N D  H A N D",630,190)

fill("cyan")
rect(600,200,20,20)

textSize(20)
text("R E P R E S E N T  H O U R  H A N D",630,220)



  
  let hr = hour();
  let min = minute();
  let sec = second();

  textSize(50)
  fill("white")
  text("HR : MIN : SEC",630,350);

  
  text(hr + "  :",630,400);


  text(min + "   :",760,400);

  text(sec,890,400);

  translate(250,200);
  rotate(-90);


  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  push();
  rotate(secAngle)
  stroke("yellow");
 strokeWeight(7)
  line(0,0,100,0)
  pop();

 
  push();
  rotate(minAngle);
  stroke("red")
  strokeWeight(4)
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("cyan")
  strokeWeight(4)
  line(0,0,75,0);
  pop();

  strokeWeight(8);
  noFill();

  

  stroke(255,0,255);
  point(0,0)


  stroke("yellow");
  noFill();
  arc(0,0,300,300,0,secAngle);

  stroke("red");
  arc(0,0,280,280,0,minAngle);

  stroke("cyan");
  arc(0,0,260,260,0,hrAngle);

  
  stroke(255);
  point(0,0)

  drawSprites();
}