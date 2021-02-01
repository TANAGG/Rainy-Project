const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drop,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10,drop11,drop12,drop13;
var maxDrops = 100
var man;
var thunderGroup;
var thundImg_1,thundImg_2,thundImg_3,thundImg_4;
var thunderStorm
var manImg
var drops = []


function preload(){
    thundImg_1 = loadImage("thunderbolt/1.png")
    thundImg_2 = loadImage("thunderbolt/2.png")
    thundImg_3 = loadImage("thunderbolt/3.png")
    thundImg_4 = loadImage("thunderbolt/4.png")
    manImg = loadImage("Walking Frame/walking_1.png")
}

function setup(){
   var canvas = createCanvas(400,600)
   engine = Engine.create();
   world = engine.world;
   
   drop = new Drops(30,50,10);
   drop1 = new Drops(40,50,10);
   drop2 = new Drops(31,50,10);
   drop3 = new Drops(32,50,10);
   drop4 = new Drops(33,50,10);
   drop5 = new Drops(70,60,10);
   drop6 = new Drops(20,50,10);
   drop7 = new Drops(90,50,10);
   drop8 = new Drops(40,50,10);
   drop9 = new Drops(100,50,10);
   man = createSprite(150,400,100,20)
   man.addImage("man1",manImg)
   man.scale = 0.6;
   
}

function draw(){
    background("black")
    Engine.update(engine)
    drawSprites();
    
    drop.display();
    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display()
    drop5.display()
    drop6.display()
    drop7.display()
    drop8.display();
    drop9.display()

    if (frameCount % 60 === 0) {
        var rand = random(0,300)
        thunderStorm = createSprite(rand,20,50,20); 
        var rand1 = Math.round(random(1,4));
        switch(rand1){
            case 1: thunderStorm.addImage("thunder1",thundImg_1);
            break;
            case 2: thunderStorm.addImage("thunder2",thundImg_2);
            break;
            case 3: thunderStorm.addImage("thunder3",thundImg_3);
            break;                            
            case 4: thunderStorm.addImage("thunder4",thundImg_4);
            break;
            
        } 
        
        thunderStorm.lifetime = 15
                    
        
    }
     
    

}





