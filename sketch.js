var truck, truckImg;
var bg, background,backG;
var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10;

function preload(){
  truckImg = loadImage("images/truck[21].png");
  bg = loadImage("images/grass.png");
  backG = loadImage("images/bg.png");
}
function setup() {
  createCanvas(1200,650);
  r1 = createSprite(405,630,370,50);
  r1.shapeColor = "green";
  //r1.addImage(bg);
  //r1.scale = 0.7;
  r2 = createSprite(770,630,240,70);
  r2.shapeColor = "blue";
  r3 = createSprite(70,630,135,200);
  r3.shapeColor = "red";
  r4 = createSprite(1100,630,185,200);
  r4.shapeColor = "yellow";
  //r5 = createSprite(1100,630,185,200);
  //r5.shapeColor = "green";
  //r6 = createSprite(1100,630,185,200);
  //r6.shapeColor = "green";
  //r7 = createSprite(1100,630,185,200);
  //r7.shapeColor = "green";
  //r8 = createSprite(1100,630,185,200);
  //r8.shapeColor = "green";
  truck = createSprite(400, 200, 50, 50);
  truck.addImage(truckImg);
  truck.scale = 0.7;
}

function draw() {
  background(backG);
  for(var i=600; i<650; i=i+10){
    fill("white");
    rect(600,i,10,5);
  }
  drawSprites();
}
