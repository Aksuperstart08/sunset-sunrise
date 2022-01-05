const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var backgroundImg;
var hour;
var score = 0;

var bg = "sunrise.png";

function preload() {
    getsBackgroundImg();
    
}

function setup(){
    canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

  
    Engine.update(engine);

    fill("black");
    textSize(30);
        
    if(hour > 12) {
        
        text("Time: " + (hour - 12) + " pm",50,100)
    } else if(hour == 12){
        text("Time: " + hour + " pm",50,100)    
    }
        else {
        text("Time: " + hour + " am",50,100)
    }




 }

async function getsBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

 
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json()

    
    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime
    

    // slice the datetime to extract hour
    hour = datetime.slice(11,13)
    console.log(hour)

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png";
    }
    
    backgroundImg = loadImage(bg);
}
