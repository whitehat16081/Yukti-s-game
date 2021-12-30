function preload(){
    bg= loadImage("forest_bg.jpg");
    girl_bg = loadAnimation("cutegirlfiles/Run (1).png","cutegirlfiles/Run (2).png","cutegirlfiles/Run (3).png","cutegirlfiles/Run (4).png","cutegirlfiles/Run (5).png","cutegirlfiles/Run (6).png","cutegirlfiles/Run (7).png","cutegirlfiles/Run (8).png","cutegirlfiles/Run (9).png","cutegirlfiles/Run (10).png","cutegirlfiles/Run (11).png","cutegirlfiles/Run (12).png","cutegirlfiles/Run (13).png","cutegirlfiles/Run (14).png","cutegirlfiles/Run (15).png","cutegirlfiles/Run (16).png","cutegirlfiles/Run (17).png","cutegirlfiles/Run (18).png","cutegirlfiles/Run (19).png","cutegirlfiles/Run (20).png")
   // girl_dead = loadAnimation("cutegirlfiles/Dead (1).png","cutegirlfiles/Dead (2).png","cutegirlfiles/Dead (3).png","cutegirlfiles/Dead (4).png","cutegirlfiles/Dead (5).png","cutegirlfiles/Dead (6).png","cutegirlfiles/Dead (7).png","cutegirlfiles/Dead (8).png","cutegirlfiles/Dead (9).png","cutegirlfiles/Dead (10).png","cutegirlfiles/Dead (11).png","cutegirlfiles/Dead (12).png","cutegirlfiles/Dead (13).png","cutegirlfiles/Dead (14).png","cutegirlfiles/Dead (15).png","cutegirlfiles/Dead (16).png","cutegirlfiles/Dead (17).png","cutegirlfiles/Dead (1).png")
    zombie_bg = loadAnimation("zombiefiles/Walk (1).png","zombiefiles/Walk (2).png","zombiefiles/Walk (3).png","zombiefiles/Walk (4).png","zombiefiles/Walk (5).png","zombiefiles/Walk (6).png","zombiefiles/Walk (7).png","zombiefiles/Walk (8).png","zombiefiles/Walk (9).png","zombiefiles/Walk (10).png");
    //zombie_dead = loadAnimation("zombiefiles/Attack (1).png","zombiefiles/Attack (2).png","zombiefiles/Attack (3).png","zombiefiles/Attack (4).png","zombiefiles/Attack (5).png","zombiefiles/Attack (6).png","zombiefiles/Attack (7).png","zombiefiles/Attack (8).png");
    obstacleImage = loadImage("cactus.png");
}

function setup(){
    createCanvas(1000,730)

    bg_sprite=createSprite(1300,370,50,50);
    bg_sprite.addImage(bg)
    bg_sprite.velocityX=-3
    bg_sprite.scale=2;

girl=createSprite(100,500,50,50)
girl.addAnimation("running",girl_bg)
girl.scale=0.5

ground=createSprite(50,550,500,20)

obstacleGroup=new Group();
}

function draw(){
    background("yellow")
    if(bg_sprite<250){
        bg_sprite.x=bg_sprite.width/2
    }
    if(keyDown("space")){
        girl.velocityY=-10
    }
    girl.velocityY=girl.velocityY+0.8
    girl.collide(ground)
    obstacles();
drawSprites();
}

function obstacles(){
 
    if (frameCount % 150 === 0) {
     var obstacle = createSprite(1500,610,40,10);
     //obstacle.x = Math.round(random(600,80));
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.5;
     obstacle.velocityX = -3;
     
      //assign lifetime to the variable
      obstacle.lifetime = 500;
     
     obstacleGroup.add(obstacle);
   }
   
   
   }