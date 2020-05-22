//Takes the data from the "levels" input box
function takeData(){
    var input = document.getElementById("levels").value;
    if(input >= 0 && input <= 8){
        level = input;
        wipe(); 
        currentSystem.do(input)
    } else {
        console.log("Level too high, recursion error would occur...")
    }
    
}

function wipe(){
    //Resets coords, angle and canvas 
    ctx.clearRect(0,0,canvas.width, canvas.height)
    x = currentSystem.startX; 
    y = currentSystem.startY;
    angle = currentSystem.startAngle; 
}

function randomise(){
    //Chooses a random system and displays at a level
    wipe()
    currentSystem = systems[Math.floor(Math.random() * systems.length)]
    currentSystem.do(level)
}

function mouse(e){
    let y = Math.floor(e.clientY)
    if(mouseAngle){
        let a = inter(y, 0, canvas.height, 0, Math.PI) //Takes the y-coord of mouse and changes theta
        currentSystem.theta = a;
    }
}

document.addEventListener("mousemove", mouse); //This checks for a mouseclick and then activates printMousePos


function inter(n, x0, y0, x1, y1){
    //Takes n in range x0,y0 and maps to range x1, y1
    let ratio = (n - x0)/(y0 - x0); 
    return (y1 - x0) * ratio + x0

}
