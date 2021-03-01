var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();

    //create 4 different surfaces
    surface1 = createSprite(100,580,180,30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,580,180,30);
    surface2.shapeColor = "purple";

    surface3 = createSprite(505,580,180,30);
    surface3.shapeColor = "orange";

    surface4 = createSprite(705,580,180,30);
    surface4.shapeColor = "red";

    //create box sprite and give velocity
    box = createSprite(630,100,40,40);
    box.shapeColor = "white";
    box.velocityY = 7;
    box.velocityX = 7;
}

function draw() {
    background(rgb(169,169,169));

    music.play();

    //create edgeSprite
     if(box.bounceOff(edges)){

    }

    //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
     box.shapeColor = "blue";
   }

   if(surface2.isTouching(box)){
     box.velocityX = 0;
     box.velocityY = 0;
     box.shapeColor = "purple";
     music.stop();
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
     box.shapeColor = "orange";
   }
    
   if(surface4.isTouching(box) && box.bounceOff(surface4)){
     box.shapeColor = "red";
   }

    drawSprites();
}