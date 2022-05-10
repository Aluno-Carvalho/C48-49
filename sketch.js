var nave;
var inimigo;
var inimigo_img;
var inimigo_group;
var frames = 300;
var barreira;
var edges;
var asteroide;
var asteroide_img;
var asteroide_group;
var asteroide_option;
var tiro;
var tiros = [];
var background_img;
var energia = 300;

function setup(){
  createCanvas(600,600);
  angleMode(DEGREES);
  nave = new Nave();
  inimigo_group = createGroup();
  asteroide_group = createGroup();
  barreira = createSprite(300,150,600,10);
  barreira.visible = false;
  edges = createEdgeSprites();
  
}

function preload(){
inimigo_img = loadImage("images/naveInimiga.png");
asteroide_img = loadImage("images/asteroide.png");
background_img = loadImage("images/background.png");
}

function draw(){
  background(background_img);
  nave.show();

  text(energia + "/300", 50,30);

  if(energia < 300){
    energia = energia + 1;
  }

  if(tiros.length >= 1){
    
  for(var i = 0; i < tiros.length; i++){
    tiros[i].show();
   }
  }
 
  if(keyDown("w") && energia >= 10){ 
    console.log("test");
    criarTiros();
    energia = energia - 10;
  }

  if(frameCount % 300 == 0){
    if(frames > 50){
      frames = frames - 25;
    }
  }

  if(keyDown("a") || keyDown("A")){
    

    if(nave.x > 1){
      nave.x = nave.x - 5;
    }
  }

  if(keyDown("d") || keyDown("D")){
    
    if(nave.x < 472){
      nave.x = nave.x + 5;
    }
  }

  inimigo_group.collide(barreira);

  inimigo_group.bounceOff(edges[0]);
  inimigo_group.bounceOff(edges[1]);
  inimigo_group.bounceOff(edges[2]);
  inimigo_group.bounceOff(edges[3]);
  drawSprites();
  inimigos();
  asteroides();
}

function inimigos(){

  if(frameCount % frames === 0){
    inimigo = createSprite(285,-10);

    inimigo.x = Math.round(random(100,500))

    inimigo.addImage(inimigo_img);

    inimigo.velocityY = 5;
    
    if(Math.round(random(0,1)) == 0){
      inimigo.velocityX = 5;
    }
    else{
      inimigo.velocityX = -5;
    }

    inimigo.scale = - 0.6;

    inimigo_group.add(inimigo);
  }
}

function asteroides(){
  if(frameCount % frames === 0){

    asteroide = createSprite(-10,300);

    asteroide.scale = - 0.1;

    asteroide.y = Math.round(random(100,400))

    asteroide.addImage(asteroide_img);

    asteroide_option = Math.round(random(0,1))

    if(asteroide_option == 0){
      asteroide.rotation = 60;

      asteroide.velocityX = 8;

      asteroide.x = -10;
    }

    else{
      asteroide.rotation = 0;

      asteroide.velocityX = -8;

      asteroide.x = 610;
    }

     asteroide.velocityY = 5;

    asteroide_group.add(asteroide);
  }
}

  function criarTiros(){
    var tiro = new Tiro(nave.x + 43);
    tiros.push(tiro);
  }

