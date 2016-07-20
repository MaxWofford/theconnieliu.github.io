var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480,600);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2
}
function draw() {
    rVal = 200;
    gVal = 0;
    bVal = 190;
    
    var isShifted = false;
    
    var y = height;
    while (y >= 0){
    var x;
    if (isShifted) {
        x = circleRadius;
    } else {
        x = 0;
    }
    while (x<= width){
        fill(color(rVal, gVal, bVal));
        stroke(color(rVal, gVal, bVal));
        ellipse(x, y, circleDiameter, circleDiameter);
        x = x + circleDiameter;
    }
    y = y - circleRadius;
    isShifted = !isShifted;
    rVal = rVal -4;
    gVal = gVal + 8;
    bVal = bVal + 8;
    }
}