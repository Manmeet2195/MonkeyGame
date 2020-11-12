var monkey, monkey_running_img,ground,jungle,jungle_img;

var banana_img, banana_img,stone,stone_img;

var bananaGroup,stoneGroup;

var score = 0;

function preload(){

  monkey_running_img = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jungle_img = loadImage("jungle.jpg");
  banana_img = loadImage("banana.png");
  stone_img = loadImage("stone.png");

}

function setup(){
 
  createCanvas(800,400);

  jungle=createSprite(0,0,800,400);
  jungle.addImage("jungle_background",jungle_img);
  jungle.scale=1.5;
  jungle.x=jungle.width/2;
  jungle.velocityX=-4;
  

  monkey = createSprite(100,300,10,10);
  monkey.addAnimation("running_monkey", monkey_running_img);
  monkey.scale=0.2;

  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;

  bananaGroup = new Group();
  stoneGroup = new Group()

  
 
  
}

function draw(){
  background("black");
 

      if(ground.x<0){
        ground.x=jungle.width/2;
      }

      if(jungle.x<100){
        console.log(jungle.x);
        jungle.x=jungle.width/2;
      }

      if(keyDown("space")){
        monkey.y=monkey.y - 12;
      }
    
      monkey.y = monkey.y + 0.8;
      
      movingBananas();
      movingStones();
    
    if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
      monkey.collide(ground);

      if(stoneGroup.isTouching(monkey)){ 
        monkey.scale=0.08;
    }
      
      drawSprites();

      textSize(20);
      fill("white");
      text("Score: "+ score, 500,50);
  
  }

function movingBananas(){
    if(frameCount%150===0){
      banana=createSprite(800,150,10,10);
      banana.addImage("bananas",banana_img);
      banana.scale=0.1;
      banana.velocityX=-4;
      banana.lifetime=200;
      bananaGroup.add(banana);
      monkey.depth = banana.depth + 1;
    
    }
}


function movingStones(){
  if(frameCount%250===0){
    stone=createSprite(800,350,10,10);
    stone.addImage("stones",stone_img);
    stone.scale=0.3;
    stone.velocityX=-4;
    stone.lifetime=200;
    stoneGroup.add(stone);
  }
}