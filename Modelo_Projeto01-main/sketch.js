var bg, bgImg
var tio, tioImg, tio_atirando;
var zombieImg
var bulletImg, bullet;
var bulletos = 5;
var reloading = false;


function preload(){
  bgImg = loadImage("assets/bg.jpeg");
  tioImg = loadImage("assets/shooter_2.png");
  tio_atirando = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie2.png");
  bulletImg = loadImage("assets/Bullets.png");
}

function setup() {
  createCanvas(1300, 650);
  
  //adicionando a imagem de fundo
  bg = createSprite(660, 450, 30, 30);
  bg.addImage(bgImg);

  // adicionando o player! 
  tio = createSprite(180, 430, 50, 50);
  tio.addImage(tioImg);
  tio.scale = 0.3;
  


  console.log(bulletos);
}


  function draw() {
  background("black");

  // movendo o player para baixo 
  if (keyDown("S") && tio.y < 590){
    tio.y += 3; 
  }
  //movendo o player para cima
  if (keyDown("W") && tio.y > 60){
    tio.y -= 3; 
  }

  if (keyDown("S") && keyDown("Q") && tio.y < 590){
    tio.y += 8; 
  }

  if (keyDown("W") && keyDown("Q") && tio.y > 60){
    tio.y -= 8; 
  }
  
  if (keyWentDown("SPACE") && bulletos > 0){
    bullet = createSprite(180, tio.y - 30, 20, 10);
    bullet.addImage(bulletImg);
    bullet.scale = 0.05;
    bullet.velocityX = 20;
    bullet.lifetime = 700;
    tio.addImage(tio_atirando);
    //bulletos--;
    bulletos = bulletos -1;
  }
  else if (keyWentUp("SPACE")){
    tio.addImage(tioImg);
  }
  
  if (keyWentDown("E") && bulletos < 5) {
    reloading = true;
    reloadTime = 60; 
    // 2 segundos (60 frames por segundo)
  }
  
  if (reloading) {
    reloadTime--;
    
    if (reloadTime <= 0) {
      bulletos = 5;
      reloading = false;
    }
  }

  spawnEnemy(); 
  drawSprites();
}




function spawnEnemy(){
  if (frameCount % 50 == 0){
    var zombie = createSprite(1300, random(100, 600), 40 ,40);
    zombie.addImage(zombieImg);
    zombie.scale = 0.6;
    zombie.velocityX = -3;
    zombie.lifetime = 700;
  }
}