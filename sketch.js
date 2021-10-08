var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var astronaut,al1,al2,al3,bullet,cloudimg,astro,cloudgroup,ground,alien1,alien2,alien3,b1,score;


function preload(){
astronaut = loadAnimation ("as1.png","as2.png","as3.png","as4.png","as5.png","as6.png")
al1 = loadImage("alien 1.png")
al2 = loadImage("aliens 2.png")
al3 = loadImage("aliens3.png")
bullet = loadImage("bullets.png")
cloudimg = loadImage("clouds.png")
night = loadImage("nightsky.png")

}






function setup (){
 createCanvas(windowWidth,1000)

 

 cloudgroup=new Group();
 

 bgsky=createSprite(width/2,height/2,width,height)
 bgsky.addImage("n",night)
 bgsky.scale= 4
 bgsky.velocityX = -2
 console.log(windowHeight)

 score = 0

 astro = createSprite(width/2,height/2,50,50)
 astro.addAnimation("aa",astronaut)
 astro.scale = 0.2

 ground=createSprite(width/2,height-400,width,30)
 ground.visible=false

 

 alien1 = createSprite(50,width/2,50,50)
 alien1.addImage("a",al1)
 alien1.scale= 0.2

 alien2=createSprite(width-50,height-20,45,45)
 alien2.addImage("s",al2)
 alien2.scale= 0.5



}

function draw(){
background(255)
spawnclouds();
bullets();
bullets2();



//astro.collide(ground)

if (cloudgroup.isTouching(astro)){
  cloudgroup.destroyEach()
  score+=20
}

if(frameCount%100===0){
alien1.x=random(-10,10)
alien1.y= random(10,height-100)
}


if(frameCount%100===0){
  alien2.x=random(width+10,width-10)
  alien2.y= random(10,height-100)
  }



if (bgsky.x<0){
bgsky.x = width+100
}



if (keyDown(UP_ARROW)){
astro.y=astro.y-19
}
 //astro.velocityY= astro.velocityY+=0.5

if(keyDown(RIGHT_ARROW)){
  astro.x = astro.x+12
}

if(keyDown(DOWN_ARROW)){
  astro.y = astro.y+19
}

if(keyDown(LEFT_ARROW)){
  astro.x = astro.x-12
}

drawSprites();

fill("yellow")
textSize(28)
text("Stars:" + score, width/2 -100,20 )
}

function bullets(){
  if(frameCount%100===0 || frameCount%130===0){
    var b1 = createSprite(alien1.x,alien1.y,50,50)
    b1.addImage("b",bullet)
    b1.scale= 0.07
    b1.lifetime= width/12 +100
    b1.velocityX= 50
    b1.velocityY= random(-3,8)

  }
 
}

function bullets2 (){
  if(frameCount%80===0 || frameCount%100===0){
    var b2 = createSprite(alien2.x,alien2.y,50,50)
    b2.addImage("c",bullet)
    b2.lifetime=width/12+100
    b2.scale=0.07
    b2.velocityX=-50
    b2.velocityY= random(5,-5)
  }
}


function spawnclouds(){
  if (frameCount%90===0){
 //var cloud = createSprite(-10,random(50,height/2),20,30)
 

  var rand = Math.round(random(1,2))
  if (rand===1){
  var cloud = createSprite(-10,random(50,height-600),20,30)
  cloud.addImage(cloudimg)
 cloud.scale= 0.3
  cloud.lifetime = width/3
  cloud.velocityX= random(3,6)
  cloudgroup.add(cloud)
  }

  if (rand===2){
    var cloud = createSprite(width+10,random(50,height-600),20,30)
    cloud.addImage(cloudimg)
    cloud.velocityX=random(-3,-5)
 cloud.scale= 0.3
  cloud.lifetime = width/3
  
    cloudgroup.add(cloud)
  }
  }
  
  
}