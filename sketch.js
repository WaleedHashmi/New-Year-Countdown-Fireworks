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

function particle(a,b,v){
    this.x = a;
    this.y = b;
    this.v = v;
    this.g = .25;
    this.force = 3
    this.randVelocity = [random(-this.force,this.force),random(-this.force,this.force)];
    
    
    this.update = function(){
        this.y += this.g;
        if (this.v > 0){
            this.y -= this.v;
            this.v -= 1; 
        }
        this.x += this.randVelocity[0];
        this.y += this.randVelocity[1]; 
        
    }
    
    this.show = function(){
        ellipse (this.x,this.y,5,5);
    }  
}

function firework(){
    this.particles = [];
    this.count = 100;
    this.x = random(width*.1,width*.9);
    this.y = random(height*.8,height);
    this.v = 30;
    this.g = .25;   //gravity
    this.o = 255;   //opacity
    this.exploded = false; 
    
    this.update = function(){
        if (this.particles.length == 0 && this.exploded == true){
            for (var i = 0; i < this.count; i++){
                this.particles.push(new particle(this.x,this.y,this.v));
            }
        }
        
        this.y += this.g;
        if (this.v > 0){
            this.y -= this.v;
            this.v -= 1; 
        } else {
            this.exploded = true;
        }
        
        for (var i = 0; i < this.particles.length; i++){
            this.particles[i].update();
        }
    }
    
    this.show = function(){   
        fill(255,255,255,this.o)
        this.o-=2;
        ellipse (this.x,this.y,5,5);
        
        for (var i = 0; i < this.particles.length; i++){
            this.particles[i].show();
        }
    }    
}    



//let timer = timeLeft();
let timer = 5; 
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
        if (frameCount % 180 == 0) {
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
 