/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xpos= 100;
var ypos= 100;

draw = function() {
    
    //draws overlapping circles that travel down diagonally
    strokeWeight(weight);
    stroke(103, 193, 184);
    fill(193,104,144);
    
    ellipse(xpos,ypos,75,75);
    
    xpos = xpos + 8;
    ypos = ypos + 8;

    //draws overlapping circles that travel down diagonally
    strokeWeight(5);
    stroke(103, 193, 184);
    fill(193,104,144);
    ellipse(height-xpos,ypos,75,75);
    xpos = xpos + 8;
    ypos = ypos + 8;
    
    //draws overlapping circles that travel down diagonally
    strokeWeight(weight);
    stroke(103, 193, 184);
    fill(193,104,144);
    ellipse(height-xpos,ypos,75,75);
    xpos = xpos + 50;
    ypos = ypos + 50;
    weight++;
    
    //draws overlapping circles that travel down diagonally
    strokeWeight(weight);
    stroke(103, 193, 184);
    fill(193,104,144);
    ellipse(height-xpos,ypos,75,75);
    xpos = xpos + 50;
    ypos = ypos + 50;

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
