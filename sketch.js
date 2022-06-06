const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a1, ground;
var m1;

function preload(){
  spaceshipDark=loadImage("images/spaceship dark.png");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    a1= new Astro(600,600,50,50);
    ground= new Ground(800,height,1600,29);
    m1= new Maze(50,100,width,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    a1.display();
    ground.display();
    m1.display();
}