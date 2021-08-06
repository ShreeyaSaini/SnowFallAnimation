const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var maxS=100;
var snow = [];
var rand;

function preload(){
 bg = loadImage("bg3.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(bg);

  if(frameCount%10 === 0){
    snow.push(new Snow(random(0,800),30,40));
  }

  for(var i=0;i < snow.length;i++){
 snow[i].display();
  }

  drawSprites();
}