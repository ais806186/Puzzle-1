var circle1D;
var canvas;
var stateofnumber1;
var stateofnumber2;
var stateofnumber3;
var stateofnumber4;
var stateofnumber5;
var stateofnumber6;
var stateofnumber7;
var stateofnumber8;
var stateofnumber9;


function preload() {
  
  keypad = loadImage('https://dl.dropbox.com/s/z1wtv49mc9alv3s/keypad.jpg');
  
  one = loadImage('https://dl.dropbox.com/s/tfc2ffo9e644v5c/1.png');
  
  two = loadImage('https://dl.dropbox.com/s/ezj6sldf74iycrt/2.png')
  
  three = loadImage('https://dl.dropbox.com/s/lyvf76jzqv6ssgp/3.png');
  
  four = loadImage('https://dl.dropbox.com/s/vmsua2jm186voq5/Number_4.png');
  
  five = loadImage('https://dl.dropbox.com/s/4owe2y8tuolfhhe/number5_PNG15086.png');
  
  six = loadImage('https://dl.dropbox.com/s/h9td52ll24p6alk/Six.svg');
  
  seven = loadImage('https://dl.dropbox.com/s/k9u36gp922yop71/alphanum_number-7_simple-black_512x512.png');
  
  eight = loadImage('https://dl.dropbox.com/s/8lq5ajya38a0geq/200px-Huit.svg.png');
  
  nine = loadImage('https://dl.dropbox.com/s/1sbbu15fpk3z2ip/Neuf.svg');
 
  
}

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

  canvas = 1;
  circle1D = 1000;
  lock = false;
}


function draw()
{
  canvas1();

}

function canvas1()
{
  background(218,129,153);
image(keypad,250,100);
  fill(0,0,0,0);
  rect(250,30,45,60);
  rect(310,30,45,60);
  rect(370,30,45,60);
  rect(430,30,45,60);
  
  if (stateofnumber1 == 1)
  {

    image(one,260,38,20,50);
  }
  
  if (stateofnumber2 == 1)
  {
  image(eight,310,38,45,50);
  }
  
  if (stateofnumber3 == 1) 
  {
  image(four,430,40,35,50);
  }
  
  if (stateofnumber4 == 1)
  {
  image(nine,430,40,35,50);
    image(one,260,38,20,50);
  }

  if (stateofnumber5 == 1) 
  {
    image(nine,310,38,45,50);
  }
  
  if(stateofnumber6 == 1)
  {
    image(three,430,40,35,50);
  }
  
  if(stateofnumber7 == 1)
  {
  image(five,430,40,35,50);
  }
  
  if(stateofnumber9 == 1)
  {
    image(three,375,35,35,50);
  }
  paintNavigation();
  
 
  
  //keypad
  if (mouseX > 11 && mouseX < 102 && mouseY < 63 && mouseY > 10 && mouseIsPressed == true)
  {

    stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber4 = 0;
    stateofnumber5 = 0;
    stateofnumber6 = 0;
    stateofnumber7 = 0;
    stateofnumber8 = 0;
    stateofnumber9 = 0;
  }
  //key1
  if (mouseX > 290 && mouseX < 327 && mouseY < 172 && mouseY > 140 && mouseIsPressed == true && lock == false)
  {
    lock == true;
  
    stateofnumber1 = 1;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber4 = 0;
    stateofnumber9 = 0;
    fill(0,0,0);
    rect(287,135,40,40);

  }
  
  //key2
  if (mouseX > 348 && mouseX < 384 && mouseY < 172 && mouseY > 140 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(347,135,40,40);
    stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber9 = 1;
  }
  
  //key3
  if (mouseX > 407 && mouseX < 445 && mouseY < 172 && mouseY > 140 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(407,135,40,40);
    stateofnumber3 = 1;
    stateofnumber1 = 0;
    stateofnumber4 = 0;
    stateofnumber9 = 0;

  }
  
  //key4
  if (mouseX > 288 && mouseX < 326 && mouseY < 227 && mouseY > 196 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(287,193,40,40);
    stateofnumber4 = 1;
    stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber3 = 0;
    stateofnumber5 = 0;
  }
  
  //key5
  if (mouseX > 348 && mouseX < 384 && mouseY < 228 && mouseY > 197 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(347,193,40,40);

    stateofnumber5 = 1;
    stateofnumber6 = 0; 
    stateofnumber7 = 0;
  }
  
  //key6
  if (mouseX > 407 && mouseX < 445 && mouseY < 228 && mouseY > 197 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(406,193,40,40);
    stateofnumber4 = 0;
    stateofnumber1 = 0;
    stateofnumber2 = 0;
    stateofnumber5 = 1; 
  }
  
  //key7
  if (mouseX > 288 && mouseX < 326 && mouseY < 282 && mouseY > 250 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(287,247,40,40);
    stateofnumber7 = 1;
    stateofnumber3 =0;
  }
  
  //key8
  if (mouseX > 348 && mouseX < 384 && mouseY < 282 && mouseY > 250 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(347,247,40,40);
  }
  
  //key9
  if (mouseX > 407 && mouseX < 445 && mouseY < 282 && mouseY > 250 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(406,247,40,40);
    stateofnumber9 = 1;
  }
  
  //key0
  if (mouseX > 348 && mouseX < 384 && mouseY < 338 && mouseY > 306 && mouseIsPressed == true)
  {
    fill(0,0,0);
    rect(347,304,40,40);
  }

  
  
  fill(0,0,0);
  text("Mouse X "+mouseX,50,230);
  text("Mouse Y "+mouseY,50,290);
}

function paintNavigation()
{
  fill(240,213,243);
  rect(10,10,90,50);
  fill(0,0,0);
  text("Reset",35,40);

}
function mouseReleased()
{
  if(lock)
  {
    lock = false;
  }

}


