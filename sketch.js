function preload(){
    font = loadFont('Gotham-Light.otf');
}

var timeLeft = function(){
    var currentDate = new Date();
    currentDate = currentDate.getTime();
    var endDate = new Date("2019-01-01 00:00:00");
    return parseInt((endDate-currentDate)/1000);
}

var timerText = function(){
    var h = String(parseInt(timer / 3600));
    var m = String(parseInt(timer / 60)%60);
    var s = String(timer - 3600*h - 60*m);
    
    if (h.length == 1){h="0"+h;}
    if (m.length == 1){m="0"+m;}
    if (s.length == 1){s="0"+s;}

    
    return h+":"+m+":"+s;    
    
}

function countDown(){
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(20);
    text ("FIREWORKS IN",width/2, height/2-35);
    textSize(50);
    text(timerText(), width/2, height/2);
    fill(255);
}

function firework(){
    this.x = random(width);
    this.y = random(height*.8,height);
    this.v = 30;
    this.g = .25;   //gravity
    this.o = 100;   //opacity
     
    
    this.update = function(){
        this.y += this.g;
        if (this.v > 0){
            this.y -= this.v;
            this.v -= 1;          
        }
    

    }
    
    this.show = function(){
        ellipse (this.x,this.y,10,10);
    }
    
}    



//let timer = timeLeft();
let timer = 1; 
var fireworks = [];
var font;

function setup(){
    // setting the canvas dimensions to the dimensions 
    // of the window
    createCanvas (innerWidth,innerHeight); 
}
  
function draw() {
    background (0);
    
    
    if (frameCount % 60 == 0 && timer > 0) {timer --;}
   

    if (timer == 0) {
        if (frameCount % 60 == 0) {
            fireworks.push(new firework);
        }
        
        for (var i = 0; i<fireworks.length; i++){
            fireworks[i].show();
            fireworks[i].update();

        }
        
        
        
    } else {
        countDown();
    }
}
 