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
  /*r1 = createSprite(400,630,370,50);
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
  //vertical:::
  for(var i=605; i<650; i=i+20){
    stroke("darkCyan");
    line(610,i,610,i+10);
  }
  for(var i=0; i<70; i=i+20){
    stroke("yellowGreen");
    line(610,i,610,i+10);
  }
  for(var i=0; i<140; i=i+20){
    stroke("darkCyan");
    line(174,i,174,i+10);
  }
  for(var i=205; i<345; i=i+20){
    stroke("black");
    line(174,i,174,i+10);
  }
  for(var i=550; i<650; i=i+20){
    stroke("darkCyan");
    line(174,i,174,i+10);
  }
  for(var i=0; i<60; i=i+20){
    stroke("darkCyan");
    line(1020,i,1020,i+10);
  }
  for(var i=100; i<325; i=i+20){
    stroke("darkCyan");
    line(1020,i,1020,i+10);
  }
  for(var i=440; i<565; i=i+20){
    stroke("darkCyan");
    line(1020,i,1020,i+10);
  }
  for(var i=165; i<325; i=i+20){
    stroke("darkCyan");
    line(727,i,727,i+10);
  }
  for(var i=375; i<570; i=i+20){
    stroke("darkCyan");
    line(727,i,727,i+10);
  }
  //horizontal:::
  for(var i=200; i<550; i=i+20){
    stroke("blue");
    line(i,592,i+10,592);
  }
  for(var i=670; i<980; i=i+20){
    stroke("green");
    line(i,592,i+10,592);
  }
  for(var i=0; i<470; i=i+20){
    stroke("red");
    line(i,430,i+10,430);
  }
  for(var i=800; i<1200; i=i+20){
    stroke("yellow");
    line(i,345,i+10,345);
  }
  for(var i=207; i<950; i=i+20){
    stroke("crimson");
    line(i,80,i+10,80);
  }
  for(var i=350; i<730; i=i+20){
    stroke("orange");
    line(i,165,i+10,165);
  }
  for(var i=1050; i<1200; i=i+20){
    stroke("purple");
    line(i,165,i+10,165);
  }
  for(var i=1030; i<1200; i=i+20){
    stroke("seaGreen");
    line(i,430,i+10,430);
  }
  for(var i=000; i<175; i=i+20){
    stroke("brown");
    line(i,345,i+10,345);
  }
  for(var i=000; i<140; i=i+20){
    stroke("cyan");
    line(i,166,i+10,166);
  }
  for(var i=000; i<175; i=i+20){
    stroke("goldenRod");
    line(i,550,i+10,550);
  }
  for(var i=1070; i<1200; i=i+20){
    stroke("midnightBlue");
    line(i,550,i+10,550);
  }
  for(var i=1030; i<1200; i=i+20){
    stroke("red");
    line(i,430,i+10,430);
  }
  for(var i=400; i<520; i=i+20){
    stroke("cyan");
    line(i,260,i+10,260);
  }
  for(var i=200; i<280; i=i+20){
    stroke("cyan");
    line(i,260,i+10,260);
  }
  drawSprites();
}
