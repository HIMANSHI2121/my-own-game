const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var truck, tImg1, tImg2, tImg3, tImg4;
var bg, background, backG, ig1, ig2, ig3, ig4;
var ball, ballImage;
var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10;
var r11, r12, r13, r14, er15, r16, r17, r18, r19, r20;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;
var b11, b12, b13, b14, b15, b16, b18, b19, b20;
var h1, h2, h3, h4, h5, h6, h7, h8, h9, h1;
var h11, h12, h13, h14, h15, h16, h17, h18, h19, h20;
var h21, h22, h23, h24, h25, h26, h27, h28, h29, h30;
var h31, h32, h33, h34, h35, h36, h37, h38, h39, h40;
var h41, h42, h43, h44, h45, h46, h47, h48, h49, h50;
var h1Img, h2Img, h3Img, h4Img, h5Img, h6Img, h7Img, h8Img, h9Img;
var ho1Img, ho2Img, ho3Img, ho4Img;
var ho1, ho2, ho3, ho4, ho5, ho6, ho7, ho8, ho9, ho10;
var rightA, leftA, downA, upA;
var plus, minus, plusImg, minusImg;
var f1, f2, f3, f4, f5, f6, f7, f8, f9, f10;
var f1i, f2i, f3i, f4i, f5i, f6i, f7i, f8i, f9i, f10i;
var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10;
var d1i, d2i;
function preload(){
  tImg1 = loadImage("images/truck[21].png");
  tImg2 = loadImage("images/truck[22].png");
  tImg3 = loadImage("images/truck[23].png");
  tImg4 = loadImage("images/truck[24].png");
  //bg = loadImage("images/preview.jpeg");
  backG = loadImage("images/bg.png");
  //garden(boundaries)
  f1i = loadImage("images/g (9).png");
  f2i = loadImage("images/g (1).png");
  //garden(decoration)
  d1i = loadImage("images/slide1.png");
  d2i = loadImage("images/slide2.png");
  //plus and minus
  plusImg = loadImage("images/+.png");
  minusImg = loadImage("images/-.png");
  //arrows
  a1Img = loadImage("images/arrow1.png");
  a2Img = loadImage("images/arrow2.png");
  a3Img = loadImage("images/arrow3.png");
  a4Img = loadImage("images/arrow4.png");
  //house images
  h1Img = loadImage("images/h (1).png");
  h2Img = loadImage("images/h (2).png");
  h3Img = loadImage("images/h (3).png");
  h3sImg = loadImage("images/h (3)s.png")
  h4Img = loadImage("images/h (4).png");
  h5Img = loadImage("images/h (5).png");
  h6Img = loadImage("images/h (6).png");
  h7Img = loadImage("images/h (7).png");
  h7sImg = loadImage("images/h (7)s.png");
  h8Img = loadImage("images/h (8).png");
  h8downImg = loadImage("images/h (8)l.png");
  h8leftImg = loadImage("images/h (8)s.png");
  h8rightImg = loadImage("images/h (8)h.png");
  h9Img = loadImage("images/h (9).png");
  h10Img = loadImage("images/h (10).png");
  h11Img = loadImage("images/h (11).png");
  h12Img = loadImage("images/h (12).png");
  //hospitals image
  ho1Img = loadImage("images/h1.png");
  ho2Img = loadImage("images/h1.1.png");
  ho3Img = loadImage("images/h1.2.png");
  ho4Img = loadImage("images/h1.3.png");
}
function setup() {
  createCanvas(1200,650);
  engine = Engine.create();
  world = engine.world;
  border = createSprite(02,displayHeight/2,20,displayHeight);
  border.shapeColor = "#666666";
  //city
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
  b4 = new CC(11130,630,155,125);
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
  b8 = new CC(336,345,275,135);
  r9 = createSprite(68,255,110,130);
  r9.shapeColor = "#65a641";
  b9 = new CC(68,255,130,150);
  r9i = createSprite(70,55,117,170);
  r9i.shapeColor = "#65a641";
  b9i = new CC(70,55,130,180);
  r10 = createSprite(1128,490,140,80);
  r10.shapeColor = "#65a641";
  b10 = new CC(1128,490,155,85);
  r11 = createSprite(1096,390,205,40);
  r11.shapeColor = "#65a641";
  b11 = new CC(1096,389,220,54);
  r12 = createSprite(870,470,210,200);
  r12.shapeColor = "#65a641";
  b12 = new CC(873,469,236,213);
  r13 = createSprite(385,20,350,70);
  r13.shapeColor = "#65a641";
  b13 = new CC(385,20,375,80);
  r14 = createSprite(815,20,325,70);
  r14.shapeColor = "#65a641";
  b14 = new CC(813,20,350,80);
  r15 = createSprite(1150,20,170,250);
  r15.shapeColor = "#65a641";
  b15 = new CC(1150,20,200,255);
  r16 = createSprite(1150,255,180,130);
  r16.shapeColor = "#65a641";
  b16 = new CC(1150,255,200,150);
  r17 = createSprite(870,236,210,170);
  r17.shapeColor = "#65a641";
  b17 = new CC(871,233,235,190);
  r18 = createSprite(647,120,667,40);
  r18.shapeColor = "#65a641";
  b18 = new CC(645,120,685,50);
  r19 = createSprite(250,170,90,140);
  r19.shapeColor = "#65a641";
  b19 = new CC(250,170,106,150);
  r20 = createSprite(614,375,130,383);
  r20.shapeColor = "#65a641";
  b20 = new CC(614,376,150,395);
  r21 = createSprite(455,210,160,50);
  r21.shapeColor = "#65a641";
  b21 = new CC(455,210,180,60);
  //ball
  var ball_options={
    isStatic:true
  }
  ball = Bodies.circle(340,265,20,ball_options);
  World.add(world,ball);
  
  //hospitals
  ho1 = createSprite(1190,590,20,20);
  ho1.addImage(ho2Img);
  ho1.scale = 0.14;
  //------------------||||||||||||||||------------------
  //Houses
  //------------------||||||||||||||||------------------
  h1 = createSprite(220,640,20,20);
  h1.addImage(h2Img);
  h1.scale = 0.08;
  h2 = createSprite(250,640,20,20);
  h2.addImage(h6Img);
  h2.scale = 0.08;
  h3 = createSprite(280,640,20,20);
  h3.addImage(h12Img);
  h3.scale = 0.08;
  h4 = createSprite(310,640,20,20);
  h4.addImage(h1Img);
  h4.scale = 0.08;
  h5 = createSprite(340,640,20,20);
  h5.addImage(h10Img);
  h5.scale = 0.08;
  h6 = createSprite(370,640,20,20);
  h6.addImage(h5Img);
  h6.scale = 0.08;
  h7 = createSprite(400,640,20,20);
  h7.addImage(h9Img);
  h7.scale = 0.08;
  h8 = createSprite(430,640,20,20);
  h8.addImage(h6Img);
  h8.scale = 0.08;
  h9 = createSprite(460,640,20,20);
  h9.addImage(h2Img);
  h9.scale = 0.08;
  h1 = createSprite(490,640,20,20);
  h1.addImage(h11Img);
  h1.scale = 0.08;
  h11 = createSprite(525,640,20,20);
  h11.addImage(h1Img);
  h11.scale = 0.08;
  h12 = createSprite(560,640,20,20);
  h12.addImage(h1Img);
  h12.scale = 0.08;
  h13 = createSprite(660,640,20,20);
  h13.addImage(h2Img);
  h13.scale = 0.08; 
  h14 = createSprite(690,640,20,20);
  h14.addImage(h1Img);
  h14.scale = 0.08; 
  h15 = createSprite(720,640,20,20);
  h15.addImage(h1Img);
  h15.scale = 0.08; 
  h16 = createSprite(770,640,20,20);
  h16.addImage(h3Img);
  h16.scale = 0.08; 
  h17 = createSprite(820,640,20,20);
  h17.addImage(h2Img);
  h17.scale = 0.08; 
  h18 = createSprite(850,640,20,20);
  h18.addImage(h5Img);
  h18.scale = 0.08; 
  h19 = createSprite(880,640,20,20);
  h19.addImage(h2Img);
  h19.scale = 0.08; 
  h20 = createSprite(910,640,20,20);
  h20.addImage(h2Img);
  h20.scale = 0.08; 
  h21 = createSprite(940,640,20,20);
  h21.addImage(h2Img);
  h21.scale = 0.08; 
  h22 = createSprite(970,640,20,20);
  h22.addImage(h2Img);
  h22.scale = 0.08; 
  h23 = createSprite(1100,640,20,20);
  h23.addImage(h2Img);
  h23.scale = 0.08; 
  h24 = createSprite(1120,640,20,20);
  h24.addImage(h6Img);
  h24.scale = 0.08; 
  h25 = createSprite(1140,640,20,20);
  h25.addImage(h6Img);
  h25.scale = 0.08; 
  h26 = createSprite(1160,640,20,20);
  h26.addImage(h6Img);
  h26.scale = 0.08; 
  h27 = createSprite(1180,640,20,20);
  h27.addImage(h2Img);
  h27.scale = 0.08; 
  h28 = createSprite(1195,625,20,20);
  h28.addImage(h2Img);
  h28.scale = 0.08; 
  h29 = createSprite(1175,610,20,20);
  h29.addImage(h2Img);
  h29.scale = 0.08;
  h30 = createSprite(1155,610,20,20);
  h30.addImage(h2Img);
  h30.scale = 0.08;  
  h31 = createSprite(1135,610,20,20);
  h31.addImage(h2Img);
  h31.scale = 0.08; 
  h32 = createSprite(1115,610,20,20);
  h32.addImage(h2Img);
  h32.scale = 0.08; 
  h33 = createSprite(1095,610,20,20);
  h33.addImage(h2Img);
  h33.scale = 0.08; 
  h34 = createSprite(1080,640,20,20);
  h34.addImage(h2Img);
  h34.scale = 0.08; 
  h35 = createSprite(1075,610,20,20);
  h35.addImage(h2Img);
  h35.scale = 0.08; 
  h36 = createSprite(1075,580,20,20);
  h36.addImage(h2Img);
  h36.scale = 0.08; 
  h37 = createSprite(1095,580,20,20);
  h37.addImage(h2Img);
  h37.scale = 0.08; 
  h38 = createSprite(1115,580,20,20);
  h38.addImage(h2Img);
  h38.scale = 0.08; 
  h39 = createSprite(1135,580,20,20);
  h39.addImage(h2Img);
  h39.scale = 0.08; 
  h40 = createSprite(1155,580,20,20);
  h40.addImage(h2Img);
  h40.scale = 0.08; 
  h41 = createSprite(1070,520,20,20);
  h41.addImage(h5Img);
  h41.scale = 0.08; 
  h41 = createSprite(1090,520,20,20);
  h41.addImage(h5Img);
  h41.scale = 0.08; 
  h42 = createSprite(1110,520,20,20);
  h42.addImage(h5Img);
  h42.scale = 0.08; 
  h43 = createSprite(1130,520,20,20);
  h43.addImage(h5Img);
  h43.scale = 0.08; 
  h44 = createSprite(1150,520,20,20);
  h44.addImage(h5Img);
  h44.scale = 0.08; 
  h45 = createSprite(1170,520,20,20);
  h45.addImage(h5Img);
  h45.scale = 0.08; 
  h45i = createSprite(1190,520,20,20);
  h45i.addImage(h5Img);
  h45i.scale = 0.08; 
  h46 = createSprite(1070,490,20,20);
  h46.addImage(h5Img);
  h46.scale = 0.08; 
  h47 = createSprite(1090,490,20,20);
  h47.addImage(h5Img);
  h47.scale = 0.08; 
  h48 = createSprite(1110,490,20,20);
  h48.addImage(h5Img);
  h48.scale = 0.08; 
  h49 = createSprite(1130,490,20,20);
  h49.addImage(h5Img);
  h49.scale = 0.08; 
  h50 = createSprite(1150,490,20,20);
  h50.addImage(h5Img);
  h50.scale = 0.08; 
  h51 = createSprite(1170,490,20,20);
  h51.addImage(h5Img);
  h51.scale = 0.08; 
  h52 = createSprite(1190,490,20,20);
  h52.addImage(h5Img);
  h52.scale = 0.08; 
  h53 = createSprite(1070,460,20,20);
  h53.addImage(h5Img);
  h53.scale = 0.08; 
  h54 = createSprite(1090,460,20,20);
  h54.addImage(h5Img);
  h54.scale = 0.08; 
  h55 = createSprite(1110,460,20,20);
  h55.addImage(h5Img);
  h55.scale = 0.08; 
  h56 = createSprite(575,190,20,20);
  h56.addImage(h4Img);
  h56.scale = 0.08; 
  h57 = createSprite(1130,460,20,20);
  h57.addImage(h5Img);
  h57.scale = 0.08; 
  h58 = createSprite(1150,460,20,20);
  h58.addImage(h5Img);
  h58.scale = 0.08; 
  h59 = createSprite(1170,460,20,20);
  h59.addImage(h5Img);
  h59.scale = 0.08; 
  h60 = createSprite(1190,460,20,20);
  h60.addImage(h5Img);
  h60.scale = 0.08;  
  h61 = createSprite(633,190,20,20);
  h61.addImage(h3Img);
  h61.scale = 0.08; 
  h62 = createSprite(670,191,20,20);
  h62.addImage(h6Img);
  h62.scale = 0.08; 
  h63 = createSprite(615,220,20,20);
  h63.addImage(h5Img);
  h63.scale = 0.08; 
  h64 = createSprite(633,220,20,20);
  h64.addImage(h1Img);
  h64.scale = 0.08; 
  h65 = createSprite(652,220,20,20);
  h65.addImage(h6Img);
  h65.scale = 0.08; 
  h66 = createSprite(670,220,20,20);
  h66.addImage(h1Img);
  h66.scale = 0.08; 
  h67 = createSprite(615,240,20,20);
  h67.addImage(h2Img);
  h67.scale = 0.08; 
  h68 = createSprite(633,240,20,20);
  h68.addImage(h1Img);
  h68.scale = 0.08; 
  h69 = createSprite(667,253,20,20);
  h69.addImage(h8Img);
  h69.scale = 0.08; 
  h70 = createSprite(615,260,20,20);
  h70.addImage(h6Img);
  h70.scale = 0.08; 
  h71 = createSprite(633,260,20,20);
  h71.addImage(h2Img);
  h71.scale = 0.08; 
  h72 = createSprite(615,285,20,20);
  h72.addImage(h5Img);
  h72.scale = 0.08; 
  h73 = createSprite(633,285,20,20);
  h73.addImage(h1Img);
  h73.scale = 0.08; 
  h74 = createSprite(651,285,20,20);
  h74.addImage(h2Img);
  h74.scale = 0.08; 
  h75 = createSprite(670,285,20,20);
  h75.addImage(h6Img);
  h75.scale = 0.08; 
  h76 = createSprite(558,285,20,20);
  h76.addImage(h6Img);
  h76.scale = 0.08; 
  h77 = createSprite(577,285,20,20);
  h77.addImage(h6Img);
  h77.scale = 0.08; 
  h78 = createSprite(596,285,20,20);
  h78.addImage(h5Img);
  h78.scale = 0.08; 
  h79 = createSprite(558,310,20,20);
  h79.addImage(h5Img);
  h79.scale = 0.08; 
  h80 = createSprite(577,310,20,20);
  h80.addImage(h2Img);
  h80.scale = 0.08; 
  h81 = createSprite(596,310,20,20);
  h81.addImage(h5Img);
  h81.scale = 0.08; 
  h82 = createSprite(615,310,20,20);
  h82.addImage(h1Img);
  h82.scale = 0.08; 
  h83 = createSprite(633,310,20,20);
  h83.addImage(h5Img);
  h83.scale = 0.08; 
  h84 = createSprite(651,310,20,20);
  h84.addImage(h5Img);
  h84.scale = 0.08; 
  h85 = createSprite(670,310,20,20);
  h85.addImage(h6Img);
  h85.scale = 0.08; 
  h86 = createSprite(558,337,20,20);
  h86.addImage(h2Img);
  h86.scale = 0.08; 
  h87 = createSprite(577,337,20,20);
  h87.addImage(h2Img);
  h87.scale = 0.08; 
  h88 = createSprite(596,337,20,20);
  h88.addImage(h1Img);
  h88.scale = 0.08; 
  h89 = createSprite(615,337,20,20);
  h89.addImage(h5Img);
  h89.scale = 0.08; 
  h90 = createSprite(634,337,20,20);
  h90.addImage(h2Img);
  h90.scale = 0.08; 
  h91 = createSprite(652,337,20,20);
  h91.addImage(h1Img);
  h91.scale = 0.08; 
  h92 = createSprite(670,337,20,20);
  h92.addImage(h6Img);
  h92.scale = 0.08; 
  h93 = createSprite(558,365,20,20);
  h93.addImage(h1Img);
  h93.scale = 0.08; 
  h94 = createSprite(577,365,20,20);
  h94.addImage(h2Img);
  h94.scale = 0.08; 
  h95 = createSprite(596,365,20,20);
  h95.addImage(h12Img);
  h95.scale = 0.08; 
  h96 = createSprite(615,365,20,20);
  h96.addImage(h11Img);
  h96.scale = 0.08; 
  h97 = createSprite(634,365,20,20);
  h97.addImage(h6Img);
  h97.scale = 0.08; 
  h98 = createSprite(652,365,20,20);
  h98.addImage(h2Img);
  h98.scale = 0.08; 
  h99 = createSprite(670,365,20,20);
  h99.addImage(h1Img);
  h99.scale = 0.08; 
  h100 = createSprite(558,395,20,20);
  h100.addImage(h10Img);
  h100.scale = 0.08; 
  h101 = createSprite(577,395,20,20);
  h101.addImage(h2Img);
  h101.scale = 0.08; 
  h102 = createSprite(596,395,20,20);
  h102.addImage(h10Img);
  h102.scale = 0.08; 
  h103 = createSprite(615,395,20,20);
  h103.addImage(h12Img);
  h103.scale = 0.08; 
  h104 = createSprite(634,395,20,20);
  h104.addImage(h10Img);
  h104.scale = 0.08; 
  h105 = createSprite(652,395,20,20);
  h105.addImage(h9Img);
  h105.scale = 0.08; 
  h106 = createSprite(670,395,20,20);
  h106.addImage(h1Img);
  h106.scale = 0.08; 
  h107 = createSprite(558,425,20,20);
  h107.addImage(h9Img);
  h107.scale = 0.08; 
  h108 = createSprite(577,425,20,20);
  h108.addImage(h10Img);
  h108.scale = 0.08; 
  h109 = createSprite(596,425,20,20);
  h109.addImage(h10Img);
  h109.scale = 0.08; 
  h110 = createSprite(615,425,20,20);
  h110.addImage(h9Img);
  h110.scale = 0.08; 
  h111 = createSprite(634,425,20,20);
  h111.addImage(h1Img);
  h111.scale = 0.08; 
  h112 = createSprite(652,425,20,20);
  h112.addImage(h12Img);
  h112.scale = 0.08; 
  h113 = createSprite(670,425,20,20);
  h113.addImage(h9Img);
  h113.scale = 0.08; 
  h114 = createSprite(558,455,20,20);
  h114.addImage(h5Img);
  h114.scale = 0.08; 
  h1 = createSprite(577,455,20,20);
  h1.addImage(h1Img);
  h1.scale = 0.08; 
  h1 = createSprite(596,455,20,20);
  h1.addImage(h6Img);
  h1.scale = 0.08; 
  h1 = createSprite(615,455,20,20);
  h1.addImage(h10Img);
  h1.scale = 0.08; 
  h1 = createSprite(634,455,20,20);
  h1.addImage(h12Img);
  h1.scale = 0.08; 
  h1 = createSprite(652,455,20,20);
  h1.addImage(h2Img);
  h1.scale = 0.08; 
  h1 = createSprite(670,455,20,20);
  h1.addImage(h11Img);
  h1.scale = 0.08; 
  h1 = createSprite(558,485,20,20);
  h1.addImage(h6Img);
  h1.scale = 0.08; 
  h1 = createSprite(577,485,20,20);
  h1.addImage(h10Img);
  h1.scale = 0.08; 
  h1 = createSprite(596,485,20,20);
  h1.addImage(h9Img);
  h1.scale = 0.08; 
  h1 = createSprite(615,485,20,20);
  h1.addImage(h2Img);
  h1.scale = 0.08; 
  h1 = createSprite(634,485,20,20);
  h1.addImage(h1Img);
  h1.scale = 0.08; 
  h1 = createSprite(652,485,20,20);
  h1.addImage(h12Img);
  h1.scale = 0.08; 
  h1 = createSprite(670,485,20,20);
  h1.addImage(h10Img);
  h1.scale = 0.08; 
  h1 = createSprite(558,515,20,20);
  h1.addImage(h12Img);
  h1.scale = 0.08; 
  h1 = createSprite(577,515,20,20);
  h1.addImage(h9Img);
  h1.scale = 0.08; 
  h10 = createSprite(596,515,20,20);
  h10.addImage(h1Img);
  h10.scale = 0.08; 
  h10 = createSprite(615,515,20,20);
  h10.addImage(h2Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,515,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(652,515,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(670,515,20,20);
  h10.addImage(h12Img);
  h10.scale = 0.08; 
  h10 = createSprite(385,195,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(405,195,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(425,195,20,20);
  h10.addImage(h11Img);
  h10.scale = 0.08; 
  h10 = createSprite(445,195,20,20);
  h10.addImage(h9Img);
  h10.scale = 0.08; 
  h10 = createSprite(465,195,20,20);
  h10.addImage(h1Img);
  h10.scale = 0.08; 
  h10 = createSprite(485,195,20,20);
  h10.addImage(h2Img);
  h10.scale = 0.08; 
  h10 = createSprite(505,195,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(525,195,20,20);
  h10.addImage(h12Img);
  h10.scale = 0.08; 
  h10 = createSprite(385,225,20,20);
  h10.addImage(h2Img);
  h10.scale = 0.08; 
  h10 = createSprite(405,225,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(425,225,20,20);
  h10.addImage(h9Img);
  h10.scale = 0.08; 
  h10 = createSprite(445,225,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(465,225,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(485,225,20,20);
  h10.addImage(h9Img);
  h10.scale = 0.08; 
  h10 = createSprite(505,225,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(525,225,20,20);
  h10.addImage(h12Img);
  h10.scale = 0.08; 
  h10 = createSprite(25,640,20,20);
  h10.addImage(h11Img);
  h10.scale = 0.08; 
  h10 = createSprite(25,620,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(25,600,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(25,580,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(55,640,20,20);
  h10.addImage(h12Img);
  h10.scale = 0.08; 
  h10 = createSprite(55,620,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(55,600,20,20);
  h10.addImage(h9Img);
  h10.scale = 0.08; 
  h10 = createSprite(55,580,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(85,640,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(85,620,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(85,600,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(85,580,20,20);
  h10.addImage(h10Img);
  h10.scale = 0.08; 
  h10 = createSprite(115,640,20,20);
  h10.addImage(h9Img);
  h10.scale = 0.08; 
  h10 = createSprite(115,620,20,20);
  h10.addImage(h6Img);
  h10.scale = 0.08; 
  h10 = createSprite(115,600,20,20);
  h10.addImage(h2Img);
  h10.scale = 0.08; 
  h10 = createSprite(115,580,20,20);
  h10.addImage(h12Img);
  h10.scale = 0.08; 
  /*h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; 
  h10 = createSprite(634,335,20,20);
  h10.addImage(h5Img);
  h10.scale = 0.08; */
  
  //-----------------||||||||||||||||------------------
  //boundaries of garden
  //-----------------||||||||||||||||------------------
  f1 = createSprite(565,205,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f2 = createSprite(614,220,10,10);
  f2.addImage(f2i);
  f2.scale = 0.2;
  f3 = createSprite(614,250,10,10);
  f3.addImage(f2i);
  f3.scale = 0.2;
  f4 = createSprite(580,205,10,10);
  f4.addImage(f1i);
  f4.scale = 0.2;
  f5 = createSprite(565,265,10,10);
  f5.addImage(f1i);
  f5.scale = 0.2;
  f6 = createSprite(580,265,10,10);
  f6.addImage(f1i);
  f6.scale = 0.2;
  f7 = createSprite(565,220,10,10);
  f7.addImage(f2i);
  f7.scale = 0.2;
  f8 = createSprite(580,208,10,10);
  f8.addImage(f1i);
  f8.scale = 0.2;
  f9 = createSprite(580,28,10,10);
  f9.addImage(f1i);
  f9.scale = 0.2;
  f10 = createSprite(570,530,10,10);
  f10.addImage(f1i);
  f10.scale = 0.2;
  f11 = createSprite(600,530,10,10);
  f11.addImage(f1i);
  f11.scale = 0.2;
  f12 = createSprite(630,530,10,10);
  f12.addImage(f1i);
  f12.scale = 0.2;
  f13 = createSprite(660,530,10,10);
  f13.addImage(f1i);
  f13.scale = 0.2;
  f14 = createSprite(570,550,10,10);
  f14.addImage(f2i);
  f14.scale = 0.2;
  f15 = createSprite(690,550,10,10);
  f15.addImage(f2i);
  f15.scale = 0.2;
  f16 = createSprite(580,208,10,10);
  f16.addImage(f1i);
  f16.scale = 0.2;
  /*f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;
  f1 = createSprite(580,208,10,10);
  f1.addImage(f1i);
  f1.scale = 0.2;*/
  //-----------------||||||||||||||||------------------
  //insie gardens
  //-----------------||||||||||||||||------------------
  d1 = createSprite(580,239,10,10);
  d1.addImage(d1i);
  d1.scale = 0.1;
  d2 = createSprite(575,225,10,10);
  d2.addImage(d2i);
  d2.scale = 0.1;
  
  //-----------------||||||||||||||||------------------
  //truck
  //-----------------||||||||||||||||------------------
  truck = createSprite(595, 630, 10, 30);
  truck.addImage(tImg1);
  truck.scale = 0.1;
  truck.setCollider("rectangle",0,0,truck.width*5,truck.height*2);
  truck.debug = true;
  /*truckBody = Bodies.rectangle(310, 30, 10, 30, {restitution:0.5, isStatic:true});
	World.add(world, truckBody);*/

  //arrow
  rightA = createSprite(205,612,50,50);
  rightA.addImage(a1Img);
  rightA.scale = 0.1
  leftA = createSprite(130,612,50,50);
  leftA.addImage(a3Img);
  leftA.scale = 0.1
  downA = createSprite(170,640,50,50);
  downA.addImage(a2Img);
  downA.scale = 0.1
  upA = createSprite(170,580,50,50);
  upA.addImage(a4Img);
  upA.scale = 0.1
  //+ & -
  plus = createSprite(1000,580,20,20);
  plus.addImage(plusImg);
  plus.scale = 0.1;
  //tint(255,126);
  minus = createSprite(1050,580,20,20);
  minus.addImage(minusImg);
  minus.scale = 0.1;
}

function draw() {
  background("#333333");
  //#56575B
  Engine.update(engine);
  ellipseMode(RADIUS);
  fill("#65a641");
  stroke("#E0C196");
  strokeWeight(4)
  ellipse(ball.position.x,ball.position.y,20);

  if(isTouching(truck,b1)){
    truck.velocityX=0;
    truck.velocityY=0;
  }
  

  edges= createEdgeSprites();
  truck.collide(edges);
   
  if(mousePressedOver(plus)){
    truck.velocityX = 2;
  }
   //movement
   if(mousePressedOver(upA) || keyWentDown(UP_ARROW)){
    if(mousePressedOver(plus)){
      truck.velocityX = 0
      truck.velocityY = +2;
    }
    if(mousePressedOver(minus)){
      truck.velocityX = 0
      truck.velocityY = -2;
    }
    truck.addImage(tImg1)
    truck.velocityX = 0
    truck.velocityY = -5
  }
  if(mousePressedOver(downA) || keyWentDown(DOWN_ARROW)){
    if(mousePressedOver(plus)){
      truck.velocityX = 0
      truck.velocityY = truck.velocityY++;
    }
    if(mousePressedOver(minus)){
      truck.velocityX = 0
      truck.velocityY = truck.velocityY-2;
    }
    truck.addImage(tImg3)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.velocityX = 0
    truck.velocityY = +5
  }
  if(mousePressedOver(rightA) || keyWentDown(RIGHT_ARROW)){
    truck.addImage(tImg2)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.velocityX = +5
    truck.velocityY = 0
  }
  if(mousePressedOver(leftA) || keyWentDown(LEFT_ARROW)){
    truck.addImage(tImg4)
    //camera.position.x = truck.x
    //camera.position.y = truck.y
    truck.velocityX = -5
    truck.velocityY = 0
  }
 
  //vertical:::
  strokeWeight(2);
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
  
  
  //c.display();
  fill("red");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b9i.display();
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
  b20.display();
  b21.display();

  drawSprites();
  }
  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }
