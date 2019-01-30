/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

    //different colored pigs appear on the pafe when the page is clicked on
    piggy = function(x, y) {
        fill(random(234), random(171), random(217))
        ellipse(x+5, y-5,175, 175);
        fill(0, 0, 0)
        ellipse(x+45, y-25, 20, 30);
        ellipse(x-35, y-25, 20, 30);
        fill(random(206), random(113), random(181))
        ellipse(x+5, y+35, 50, 25);
        ellipse(x-1, y+36, 8, 10);
        ellipse(x+13, y+36, 8, 10);
    }
    
    mouseClicked = function(){
    
    piggy(mouseX, mouseY);
    
    }
    
   
 draw = function() {
    
   

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
