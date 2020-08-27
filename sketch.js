const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3, box4, box5;

var pig1, pig2;

var log1, log2; 

var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(900, 320, 70, 70);
    box3 = new Box(700, 250, 70, 70);
    box4 = new Box(900, 250, 70, 70);
    box5 = new Box(810, 100, 70, 70);

    log1 = new Log(810, 260, 300, PI/2);  
    log2 = new Log(810, 160, 300, PI/2);
    log3 = new Log(760, 120, 150, PI/7);
    log4 = new Log(870, 120, 150, -PI/7);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 240);

    floor = new Ground(600, 390, 1200, 20);

    bird = new Bird(200, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    floor.display();
    bird.display();
}