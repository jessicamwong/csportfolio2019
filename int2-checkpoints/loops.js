/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        background(193, 180, 232);

        // for (var i = 0; i < width; i += 50) {
        //     for (var j = 0; j < height; j += 50) {
        //         ellipse(i, j, 50, 50);
        //     }
        // }
          for (var i = 0; i < width; i += 50) {
            for (var j = 0; j < height; j += 50) {
                var size = random(50);
                fill(random(139), random(128), random(155));
                stroke(random(139), random(128), random(155));
                ellipse(i, j, size, size);
            }
        }
       

        draw = function() {
           

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
