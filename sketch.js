var truck, truckImg;
var bg, background,backG;
var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10;
var r11, r12, r13, r14, er15, r16, r17, r18, r19, r20;
function preload(){
  truckImg = loadImage("images/truck[21].png");
  bg = loadImage("images/grass.png");
  backG = loadImage("images/bg.png");
}
function setup() {
  createCanvas(1200,650);
  r1 = createSprite(393,640,370,50);
  r1.shapeColor = "#65a641";
  //r1.addImage(bg);
  //r1.scale = 0.5;
  r2 = createSprite(817,640,340,50);
  r2.shapeColor = "#65a641";
  r3 = createSprite(75,630,123,120);
  r3.shapeColor = "#65a641";
  r4 = createSprite(1128,630,143,120);
  r4.shapeColor = "#65a641";
  r5 = createSprite(107,490,187,75);
  r5.shapeColor = "#65a641";
  r6 = createSprite(345,512,260,113);
  r6.shapeColor = "#65a641";
  r7 = createSprite(107,390,185,40);
  r7.shapeColor = "#65a641";
  r8 = createSprite(343,346,255,125);
  r8.shapeColor = "#65a641";
  r9 = createSprite(68,255,110,130);
  r9.shapeColor = "#65a641";
  r9 = createSprite(70,55,114,170);
  r9.shapeColor = "#65a641";
  r10 = createSprite(1128,490,140,80);
  r10.shapeColor = "#65a641";
  r11 = createSprite(1096,390,205,40);
  r11.shapeColor = "#65a641";
  r12 = createSprite(870,470,210,200);
  r12.shapeColor = "#65a641";
  r13 = createSprite(395,20,350,70);
  r13.shapeColor = "#65a641";
  r14 = createSprite(815,20,325,70);
  r14.shapeColor = "#65a641";
  r15 = createSprite(1150,20,170,250);
  r15.shapeColor = "#65a641";
  r16 = createSprite(1150,255,180,130);
  r16.shapeColor = "#65a641";
  /*r17 = createSprite(1128,490,140,80);
  r17.shapeColor = "#65a641";
  r18 = createSprite(1128,490,140,80);
  r18.shapeColor = "#65a641";*/
  truck = createSprite(590, 630, 50, 50);
  truck.addImage(truckImg);
  truck.scale = 0.1;
}

function draw() {
  background(backG);
  //vertical:::
  for(var i=605; i<650; i=i+10){
    stroke("white");
    line(610,i,610,i+5);
  }
  for(var i=0; i<70; i=i+10){
    stroke("white");
    line(610,i,610,i+5);
  }
  for(var i=0; i<140; i=i+10){
    stroke("white");
    line(174,i,174,i+5);
  }
  for(var i=205; i<345; i=i+10){
    stroke("white");
    line(174,i,174,i+5);
  }
  for(var i=550; i<650; i=i+10){
    stroke("white");
    line(174,i,174,i+5);
  }
  for(var i=0; i<60; i=i+10){
    stroke("white");
    line(1020,i,1020,i+05);
  }
  for(var i=100; i<325; i=i+10){
    stroke("white");
    line(1020,i,1020,i+5);
  }
  for(var i=440; i<565; i=i+10){
    stroke("white");
    line(1020,i,1020,i+05);
  }
  for(var i=165; i<325; i=i+10){
    stroke("white");
    line(727,i,727,i+5);
  }
  for(var i=375; i<570; i=i+10){
    stroke("white");
    line(727,i,727,i+05);
  }
  for(var i=270; i<410; i=i+10){
    stroke("white");
    line(510,i,510,i+5);
  }
  for(var i=450; i<560; i=i+10){
    stroke("white");
    line(510,i,510,i+5);
  }
  for(var i=165; i<230; i=i+10){
    stroke("white");
    line(335,i,335,i+5);
  }
  for(var i=605; i<670; i=i+10){
    stroke("white");
    line(1023,i,1023,i+5);
  }
  //horizontal:::
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
  for(var i=000; i<175; i=i+20){
    stroke("white");
    line(i,345,i+10,345);
  }
  for(var i=000; i<140; i=i+20){
    stroke("white");
    line(i,166,i+10,166);
  }
  for(var i=000; i<175; i=i+20){
    stroke("white");
    line(i,550,i+10,550);
  }
  for(var i=1070; i<1200; i=i+20){
    stroke("white");
    line(i,550,i+10,550);
  }
  for(var i=1030; i<1200; i=i+20){
    stroke("white");
    line(i,430,i+10,430);
  }
  for(var i=400; i<520; i=i+20){
    stroke("white");
    line(i,260,i+10,260);
  }
  for(var i=200; i<280; i=i+20){
    stroke("white");
    line(i,260,i+10,260);
  }
  drawSprites();
}
