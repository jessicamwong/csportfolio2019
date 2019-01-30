/* global draw ellipse rect p processing width height size background mouseX mouseY fill strokeWeight stroke */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


        draw = function() {
            background();

            //color of square changes from a pinkish redish color to blue
           
            //BLUE 
            if (mouseX > 200 && mouseY < 200) {
                fill(54, 155, 160);
                strokeWeight(3);
                stroke(24, 68, 99);
                triangle(mouseX - 30, mouseY +20, mouseX + 35, mouseY + 20, mouseX, mouseY - 32);


            }
            //ORANGE
            else if (mouseX > 200) {
                fill(214, 148, 117);
                strokeWeight(3);
                stroke(183, 111, 73);
                rect(mouseX, mouseY, 35, 35);

            }

            //PURPLE
            else if (mouseX < 200 && mouseY > 200) {
                fill(169, 125, 196);
                strokeWeight(3);
                stroke(98, 35, 112);
                ellipse(mouseX, mouseY, 50, 30);

            }

            //PINK
            else {
                fill(214, 116, 162);
                strokeWeight(3);
                stroke(168, 21, 90);
                rect(mouseX, mouseY, 30, 50);

            }




        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
