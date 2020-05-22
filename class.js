// A Lindermayer System (L-System) is a mathematical grammar system which builds upon itself. 
// The L-System consists of an alphabet, a string called the Axiom and a list of production rules
// L-Systems are useful for modelling self-similar growth since previous levels of the L-Systenm 
// Create more complex versions in the next level, in accordance to its production rules

// The list of rules for an L-System can be made as a dictionary in JS 
// That takes a character and outputs a string. 

//These alphabetical outputs can be interpreted as drawing functions such as forward or rotate
//And this creates a beautiful visualisation of the L-System 

var xstack = []
var ystack = []
var anglestack = []

class Lsystem{
    constructor(rules, axiom, theta = Math.PI/4, startX = canvas.width/2, startY = canvas.height/2){
        this.rules = rules;
        this.axiom = axiom;
        this.foos = {"f": f, "g": f, "l": l, "r": r, "[" : lb, "]" : rb} // List of functions which a conventional L-System can do, more could easily be added
        this.theta = theta; 
        this.startX = startX; 
        this.startY = startY;
        this.startAngle = 0; 
        this.size = 10; 
    }

    draw(level, s){
        if(level === 0){
            for(let i = 0; i < s.length; i++){
                if(this.foos.hasOwnProperty(s[i])){
                    this.foos[s[i]](); // If we are on the final level, just carry out each letters related function
                }
            }
        } else { //Create the new string from the current one, based on production rules
            let newS = "";
            for(let i = 0; i < s.length; i++){
                if(this.rules.hasOwnProperty(s[i])){ //If a character has a production rule, add to newS
                    newS += this.rules[s[i]];
                } else {
                    newS += s[i]; //If there is no production rule, it is convention to copy the letter to the next string
                }
            }
            this.draw(level - 1, newS) //Recursive call which repeats until level 0 is hit
        }
    }

    do(level){
        //Apply the L-systems rules 'level' number of times and draw the output
        this.draw(level, this.axiom)
    }
}


function f(){
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x + currentSystem.size * Math.cos(angle), y - currentSystem.size * Math.sin(angle)) //this should draw a line by a certain size by an angle
    ctx.lineWidth = 2;
    ctx.strokeStyle = colour;
    ctx.stroke();

    //Update 'pen' coordinates
    x = x + currentSystem.size * Math.cos(angle)
    y = y - currentSystem.size * Math.sin(angle) // Move upside down
}

function l(){
    //Rotate counter-clockwise by theta radians  
    angle += currentSystem.theta;
}

function r(){
    // Rotate clockwise by theta radians 
    angle -= currentSystem.theta;
}

//Extra functions which can be used in more Lsystems

function pushIn(){
    //Saves current coordinates and angle
    xstack.push(x)
    ystack.push(y)
    anglestack.push(angle)
}

function popOut(){
    //Removes most recent elements from each stack
    xstack.pop(-1)
    ystack.pop(-1)
    anglestack.pop(-1)
}

function lb(){
    //lb means leftbracket which is used in L-systems
    pushIn(); 
    angle += currentSystem.theta; 
}

function rb(){
    //means right bracket. 
    let finalIndex = xstack.length - 1
    x = xstack[finalIndex]
    y = ystack[finalIndex]
    angle = anglestack[finalIndex]
    popOut();
    angle -= currentSystem.theta;
}

