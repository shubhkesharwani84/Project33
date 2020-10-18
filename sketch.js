var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = []; 
var particles = [];
var plinkos = [];
var particle;

var divisionHeight=300;
var score = 0;
var turn = 0;
var gameState = "Play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  
    if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250)
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameturn%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //  }


 
//   for (var j = 0; j < particles.length; j++) {
   
//      particles[j].display();
//    }
   for (var k = 0; k < divisions.length; k++) {
         divisions[k].display();
         
   }

   fill(255)
   textSize(20)
   text("Score: " + score, 650, 20)

   text("500", 20, 540)
   text("500", 100, 540)
   text("500", 180, 540)
   text("100", 260, 540)
   text("100", 340, 540)
   text("100", 420, 540)
   text("100", 500, 540)
   text("200", 580, 540)
   text("200", 660, 540)
   text("200", 740, 540)

    if(particle!=null){
        particle.display()

           if(particle.body.position.y>760){
             if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( turn>= 5) gameState ="end";                          
              }
            else if(particle.body.position.x < 600 && particle.body.position.x > 301 ){
                      score = score+100;
                      particle = null;
                      if(turn>=5) gameState = "end";
           }

          
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( turn>= 5)  gameState ="end";

              } 
    }
}
}

function mousePressed(){
    if(gameState !== "end"){
        turn++
      particle = new Particle(mouseX, 10, 10);
    }
}
