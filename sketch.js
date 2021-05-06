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
  r1 = createSprite(400,630,370,50);
  r1.shapeColor = "green";
  //r1.addImage(bg);
  //r1.scale = 0.7;
  r2 = createSprite(770,630,240,50);
  r2.shapeColor = "blue";
  r3 = createSprite(70,630,125,200);
  r3.shapeColor = "red";
  r4 = createSprite(1100,630,125,200);
  r4.shapeColor = "yellow";
  /*r5 = createSprite(1000,630,185,200);
  //r5.shapeColor = "seaGreen";
  //r6 = createSprite(1100,630,185,200);
  //r6.shapeColor = "green";
  //r7 = createSprite(1100,100,185,200);
  //r7.shapeColor = "yellow";
  //r8 = createSprite(1100,60,185,200);
  //r8.shapeColor = "darkGreen";
  //r9 = createSprite(300,200,10,40);
  truck = createSprite(400, 200, 50, 50);
  truck.addImage(truckImg);
  truck.scale = 0.7;*/
}

function draw() {
  background(backG);
  for(var i=600; i<650; i=i+10){
    fill("white");
    rect(600,i,10,5);
  }
  for(var i=200; i<550; i=i+20){
    stroke("white");
    line(i,592,i+10,592);
  }
  for(var i=670; i<980; i=i+20){
    stroke("white");
    line(i,592,i+10,592);
  }
  for(var i=0; i<470; i=i+20){
    stroke("white");
    line(i,430,i+10,430);
  }
  for(var i=800; i<1200; i=i+20){
    stroke("white");
    line(i,345,i+10,345);
  }
  for(var i=207; i<950; i=i+20){
    stroke("white");
    line(i,80,i+10,80);
  }
  for(var i=350; i<730; i=i+20){
    stroke("white");
    line(i,165,i+10,165);
  }
  for(var i=1050; i<1200; i=i+20){
    stroke("white");
    line(i,165,i+10,165);
  }
  for(var i=1030; i<1200; i=i+20){
    stroke("white");
    line(i,430,i+10,430);
  }
 
  drawSprites();
}
