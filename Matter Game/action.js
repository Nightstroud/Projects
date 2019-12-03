let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let boxes = [];
let ground;

function setup() {
    createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    let options = {
        isStatic: true
    };
    ground = Bodies.rectangle(300, height, width, 50, options);
    World.add(world, ground);
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10,30), random(10, 30)));
}

function draw() {
    background(51);
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke();
    fill(170);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 50);
}