const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var truck, tImg1, tImg2, tImg3, tImg4;
var bg, background,backG;
var ball;
var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10;
var r11, r12, r13, r14, er15, r16, r17, r18, r19, r20;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;
var b11, b12, b13, b14, b15, b16, b18, b19, b20;
function preload(){
  tImg1 = loadImage("images/truck[21].png");
  tImg2 = loadImage("images/truck[22].png");
  tImg3 = loadImage("images/truck[23].png");
  tImg4 = loadImage("images/truck[24].png");
  bg = loadImage("images/house1.png");
  backG = loadImage("images/bg.png");
}
function setup() {
  createCanvas(1200,650);
  engine = Engine.create();
  world = engine.world;
  border = createSprite(02,325,20,650);
  border.shapeColor = "white";
  r1 = createSprite(393,640,370,50);
  r1.shapeColor = "#65a641";
  b1 = new CC(390,640,380,60);
  r2 = createSprite(817,640,340,50);
  r2.shapeColor = "#65a641";
  b2 = new CC(820,640,355,60);
  r3 = createSprite(75,630,123,120);
  r3.shapeColor = "#65a641";
  b3 = new CC(79,630,130,130);
  r4 = createSprite(1128,630,143,120);
  r4.shapeColor = "#65a641";
  b4 = new CC(1130,630,155,125);
  r5 = createSprite(107,490,187,75);
  r5.shapeColor = "#65a641";
  b5 = new CC(110,490,194,82);
  r6 = createSprite(339,512,260,113);
  r6.shapeColor = "#65a641";
  b6 = new CC(337,512,275,127);
  r7 = createSprite(105,390,185,40);
  r7.shapeColor = "#65a641";
  b7= new CC(107,387,190,50);
  r8 = createSprite(340,346,255,125);
  r8.shapeColor = "#65a641";
  b8= new CC(336,347,269,130);
  r9 = createSprite(68,255,110,130);
  r9.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r9 = createSprite(75,55,117,170);
  r9.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r10 = createSprite(1128,490,140,80);
  r10.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r11 = createSprite(1096,390,205,40);
  r11.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r12 = createSprite(870,470,210,200);
  r12.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r13 = createSprite(395,20,350,70);
  r13.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r14 = createSprite(815,20,325,70);
  r14.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r15 = createSprite(1150,20,170,250);
  r15.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r16 = createSprite(1150,255,180,130);
  r16.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r17 = createSprite(870,236,210,170);
  r17.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r18 = createSprite(647,123,667,40);
  r18.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r19 = createSprite(257,170,86,140);
  r19.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r20 = createSprite(614,375,130,383);
  r20.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  r21 = createSprite(455,210,160,50);
  r21.shapeColor = "#65a641";
  //b8= new CC(390,640,380,60);
  //ball
  var ball_options={
    isStatic:true
  }
  ball = Bodies.circle(340,265,20,ball_options);
  World.add(world,ball);
  //truck
  truck = createSprite(590, 630, 50, 50);
  truck.addImage(tImg1);
  truck.scale = 0.1;
  
}

function draw() {
  background("#666666");
  Engine.update(engine);
  ellipseMode(RADIUS);
  fill("#65a641");
  stroke("#E0C196");
  ellipse(ball.position.x,ball.position.y,20);

   //movement
   if(keyIsDown(UP_ARROW)){
    truck.addImage(tImg1)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.y = truck.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    truck.addImage(tImg3)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.y = truck.y+5
  }
  if(keyIsDown(RIGHT_ARROW)){
    truck.addImage(tImg2)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.x = truck.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    truck.addImage(tImg4)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.x = truck.x-5
  }
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
  truck.collide(r1);

 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  /*b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();*/
  
  drawSprites();
}
