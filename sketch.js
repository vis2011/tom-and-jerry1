var cat,cImage,cAnimation,cImage1,cImage2;
var mouse,mImage;
var garden,gImage;


function preload() {
  gImage=loadImage("garden.png");
 mImage=loadImage("mouse4.png");
 cImage=loadImage("cat1.png");
 cAnimation=loadAnimation("cat2.png","cat3.png");
 cImage1=loadAnimation("cat4.png","cat1.png");
}

function setup(){
 createCanvas(1000,580);

 garden=createSprite(400,300,500,800);
 garden.addImage(gImage);
 garden.scale=0.8;

  cat=createSprite(670,320,50,40);
  cat.addImage(cImage);
  cat.scale=0.10;

  mouse=createSprite(200,480,20,20);
  mouse.addImage(mImage);
  mouse.scale=0.10;
}

function draw() {
    //Write condition here to evalute if tom and jerry collide


   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX=0;
     cat.velocityY=0;
     cat.addAnimation("lastImage",cImage1);
     cat.changeAnimation("lastImage");
   }


    drawSprites();
    keyPressed();
    text(mouseX,",",mouseY,10,45);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("down")){
    cat.velocityY=5;
    cat.addAnimation("cat_running",cAnimation);
    cat.changeAnimation("cat_running");
   }
   
else if(keyWentUp("down")){
        cat.velocityY=0;
     }

   if(keyDown("left")){
    cat.velocityX=-5;
    cat.addAnimation("cat_running",cAnimation);
    cat.changeAnimation("cat_running");
   }

   else if(keyWentUp("left")){
     cat.velocityX=0;
  }

}
