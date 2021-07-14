var bkground, backgroundImage;
var shooter, shooter1Image, shooter2Image, shooter3Image;
var zombie, zombieImage;
var zombieGroup;

function preload() {
  backgroundImage = loadImage("images/bg.jpeg");
  shooter1Image = loadImage("images/shooter_1.png");
  shooter2Image = loadImage("images/shooter_2.png");
  shooter3Image = loadImage("images/shooter_3.png");
  zombieImage = loadImage("images/zombie.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bkground = createSprite(displayWidth /2 -20, displayHeight /2 -40, 20, 20);
  bkground.addImage("background", backgroundImage);
  bkground.scale = 1.5

  shooter = createSprite(50, displayHeight /2 -40, 20, 20)
  shooter.addImage("shooter2",shooter2Image)
  shooter.scale = .7

  zombieGroup = new Group();
}

function draw() {
  background(0);

  if(keyDown("UP_ARROW")){
    shooter.y = shooter.y - 30;
  }
  if(keyDown("DOWN_ARROW")){
    shooter.y = shooter.y + 30;
  }
  
  enemy();
  drawSprites();
}

function enemy() {
  if(frameCount % 100 === 0){
    zombie = createSprite(random(1000, 1500), random(100,500), 40, 40);
    zombie.addImage("zombie",zombieImage);
    zombie.scale = .3;
    zombie.velocityX= -2;
    zombie.lifetime = 750;
    zombieGroup.add(zombie)
  }
}