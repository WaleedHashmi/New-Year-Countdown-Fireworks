var timeLeft = function(){
    var currentDate = new Date();
//    var cTime = currentDate.getTime();
//    var nTime = Date()
//    
    return (currentDate.getTime());
}


let timer = timeLeft();
var font;

function preload(){
    font = loadFont('Gotham-Light.otf');
}

function setup(){
    // setting the canvas dimensions to the dimensions 
    // of the window
    createCanvas (innerWidth,innerHeight); 
}
  
function draw() {
    background (0);
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(100);
    text(timer, width/2, height/2);
    
    fill(255);
    
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
    }
    if (timer == 0) {
        text("HAPPY NEW YEAR", width/2, height*0.7);
    }
}
 