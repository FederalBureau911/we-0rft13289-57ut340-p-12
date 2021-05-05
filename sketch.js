const Engine = Matter.Engine; const World = Matter.World; const Bodies = Matter.Bodies;

drops = []
function preload(){
    
}

function setup(){
    engine = Engine.create(); world = engine.world;
    createCanvas(1000,1000)
   //d rop = new Drop
for(var i=0; i<100; i++){
    drops.push( new Drops( random(0,1000),  random(0,100), 10))
}

    
}

function draw(){
    background(100)
    Engine.update(engine);
    
    
    for(var i=0; i<100; i++){
        drops[i].display() 
         drops[i].update()
    }
    
}   

