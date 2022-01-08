var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
    bg= loadImage("forest_bg.jpg");
    girl_bg = loadAnimation("cutegirlfiles/Run (1).png","cutegirlfiles/Run (2).png","cutegirlfiles/Run (3).png","cutegirlfiles/Run (4).png","cutegirlfiles/Run (5).png","cutegirlfiles/Run (6).png","cutegirlfiles/Run (7).png","cutegirlfiles/Run (8).png","cutegirlfiles/Run (9).png","cutegirlfiles/Run (10).png","cutegirlfiles/Run (11).png","cutegirlfiles/Run (12).png","cutegirlfiles/Run (13).png","cutegirlfiles/Run (14).png","cutegirlfiles/Run (15).png","cutegirlfiles/Run (16).png","cutegirlfiles/Run (17).png","cutegirlfiles/Run (18).png","cutegirlfiles/Run (19).png","cutegirlfiles/Run (20).png")
    girl_dead = loadAnimation("cutegirlfiles/Dead (1).png","cutegirlfiles/Dead (3).png","cutegirlfiles/Dead (4).png","cutegirlfiles/Dead (5).png","cutegirlfiles/Dead (8).png","cutegirlfiles/Dead (9).png","cutegirlfiles/Dead (10).png","cutegirlfiles/Dead (12).png","cutegirlfiles/Dead (16).png","cutegirlfiles/Dead (17).png","cutegirlfiles/Dead (18).png","cutegirlfiles/Dead (19).png","cutegirlfiles/Dead (20).png","cutegirlfiles/Dead (21).png","cutegirlfiles/Dead (22).png","cutegirlfiles/Dead (23).png","cutegirlfiles/Dead (27).png","cutegirlfiles/Dead (28).png","cutegirlfiles/Dead (30).png");
    zombie_bg = loadAnimation("zombiefiles/Walk (1).png","zombiefiles/Walk (2).png","zombiefiles/Walk (3).png","zombiefiles/Walk (4).png","zombiefiles/Walk (5).png","zombiefiles/Walk (6).png","zombiefiles/Walk (7).png","zombiefiles/Walk (8).png","zombiefiles/Walk (9).png","zombiefiles/Walk (10).png");
    zombie_dead = loadAnimation("zombiefiles/Attack (1).png","zombiefiles/Attack (2).png","zombiefiles/Attack (3).png","zombiefiles/Attack (4).png","zombiefiles/Attack (5).png","zombiefiles/Attack (6).png","zombiefiles/Attack (7).png","zombiefiles/Attack (8).png");
    obstacleImage = loadImage("cactus.png");
    gameOverImg = loadImage("game_over.png");
    resetImg=loadImage("restart.png");
}

function setup(){
    createCanvas(1500,730)

    bg_sprite=createSprite(1300,350,50,50);
    bg_sprite.addImage(bg)
    bg_sprite.velocityX=-4;
    bg_sprite.scale=2.05;

girl=createSprite(230,500,50,50)
girl.addAnimation("running",girl_bg)
girl.addAnimation("dead",girl_dead)
girl.scale=0.4
girl.setCollider("rectangle",0,70,300,300)

zombie = createSprite(70,530,100,50);
  zombie.addAnimation("walking",zombie_bg);
  zombie.addAnimation("attack",zombie_dead);
  zombie.scale= 0.4;

ground=createSprite(750,680,1500,100)
ground.shapeColor="#181C25"

gameOver = createSprite(700,200);
gameOver.addImage(gameOverImg);
gameOver.scale = 2;

resetSprite = createSprite(700,400);
resetSprite.addImage(resetImg);
resetSprite.scale = 0.4;


obstacleGroup=new Group();

score = 0;
}

function draw(){
    background("white")

    if(gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    gameOver.visible = false;
    resetSprite.visible = false;
    if(bg_sprite.x<200){
        bg_sprite.x=bg_sprite.width/2
    }
    if(keyDown("space")){
        girl.velocityY=-10
    }
    girl.velocityY=girl.velocityY+0.8
    girl.collide(ground)
    obstacles();

    if(obstacleGroup.isTouching(girl)){
        gameState = END;
    }
}
    else if (gameState === END) {
    gameOver.visible = true;
    resetSprite.visible = true;
    bg_sprite.velocityX=0;
    girl.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    
    girl.changeAnimation("dead",girl_dead);
    zombie.changeAnimation("attack",zombie_dead);
    obstacleGroup.setLifetimeEach(-1);
    if(mousePressedOver(resetSprite)) {
        reset();
      }
    
    }
drawSprites();
textSize(30);
textFont("Comic Sans MS");
fill("white")
text("Score: "+ score, 1200,50);
}

function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    resetSprite.visible = false;
    
    
    girl.changeAnimation("running",girl_bg);
    zombie.changeAnimation("running",zombie_bg);
    
    
    score = 0;
    
  }

function obstacles(){
 
    if (frameCount % 150 === 0) {
     var obstacle = createSprite(1500,570,40,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.5;
     obstacle.setCollider("rectangle",0,0,200,200)
     obstacle.velocityX = -5;
     
      //assign lifetime to the variable
      obstacle.lifetime = 500;
     
     obstacleGroup.add(obstacle);
   }
   
   
   }