let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png")
  bg_img = loadImage("bg.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
//criar sprite lander e add imagem e scale
  lander = createSprite(60,70)
  lander.addImage(lander_img)
  lander.scale = 0.1
  ground = createSprite(500,680,1000,40)


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //colocar texto na tela para velocidade vertical
  text(" velocidade vertical: " + round(vy),800,75)
  text(" velocidade horizontal: " + round(vx),800,50) 
  vy=vy+g
  lander.y += vy
  lander.x += vx
  pop();

  //configurar a descida da nave em y + gravidade
  
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
vy= -1
  }
  if(keyCode == LEFT_ARROW){
    vx= -1
      }
      if(keyCode == RIGHT_ARROW){
        vx= +1
          }
}
function keyReleased(){
  if(keyCode == UP_ARROW){
    vy= -1
      }
      if(keyCode == LEFT_ARROW){
        vx= -1
          }
          if(keyCode == RIGHT_ARROW){
            vx= +1
              }
}


