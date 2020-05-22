var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 600;

var delay = 20; 

var size = 10;
var colour = "White";
var angle = 0;
var level = 5; //The level at which we should render the lindermayer system

// Pen Coordinates
var x = canvas.width/2;
var y = canvas.height/2; 
var mouseAngle = false; 

//Some Lsystems
let koch = new Lsystem({"f" : "flfrrflf"}, "f", Math.PI/3, 0, canvas.height - 100) //Koch curve, can vary theta
koch.startAngle = 0
koch.size = 5;

let serp = new Lsystem({"f" : "frglflgrf", "g" : "gg"}, "frgrg", 2 * Math.PI/3) //Serpinskis Triangle, theta = 2 * Math.PI/3
let dragon = new Lsystem({"x" : "xryfr", "y" : "lfxly"}, "fx", Math.PI/2) //Theta = Math.PI/2

let binaryTree = new Lsystem({"f" : "g[f]f", "g" : "gg"}, "f", Math.PI/2, canvas.width/2, canvas.height)
binaryTree.startAngle = Math.PI/2

var currentSystem = binaryTree; //Current L-system in use
var systems = [koch, serp, dragon, binaryTree] //Array of systems

currentSystem.do(level); 

function main(){
    document.getElementById("angleMode").innerHTML = "Angle Mode: " + String(mouseAngle ? "Mouse" : "Fixed")
    wipe() //Reset and redraw every frame
    currentSystem.do(level);
}

intervalID = setInterval(main, delay); 

