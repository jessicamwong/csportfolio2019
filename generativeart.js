/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var r = 224;
        var g = 226;
        var b = 106;
        var l = 224;
        var m = 226;
        var n = 106;

        //draws navy blue sky
        background(18, 31, 68);
        
        frameRate(10);

        draw = function() {
            background(18, 31, 68);

            //loops ellipses to create the different sized stars
            for (var i = 0; i < width; i += random(10, 50)) {
                for (var j = 0; j < height; j += random(10, 50)) {
                    var size = random(8);
                    fill(224, 226, 106);
                    ellipse(i, j, size, size);

                }
            }
            owl();



        };

        owl = function() {





            //OWL 1
            
            //draws owl's wings
            fill(94,88, 73)
            ellipse(40, 320, 30, 50);
            ellipse(99, 320, 30, 50);
            
            //draws owl's body
            fill(94, 88, 73)
            ellipse(70, 315, 63, 70);
            
            //draws owl's ears
            fill(130, 120, 94)
            triangle(40, 253, 55, 248, 35, 235)
            triangle(84, 248, 99, 253, 104, 235)
            
            //draws owl's head
            fill(130, 120, 94)
            ellipse(70, 275, 77, 70);
            
            //draws owl's big eyes
            
            fill(r, g, b);
            ellipse(59, 280, 21, 21);
            ellipse(80, 280, 21, 21);
            
            //draws owl's small eyes
            fill(0, 0, 0)
            ellipse(60, 281, 5, 5);
            ellipse(79, 281, 5, 5);
            
            //draws owl's nose
            fill(186, 129, 37)
            triangle(66, 285, 74, 285, 70, 292);
            
            //draws branch
            fill(66, 56, 41)
            rect(0, 350, 145, 10);

            //OWL 2

            //draws owl's wings
            fill(94, 88, 73)
            ellipse(275, 260, 25, 42);
            ellipse(324, 260, 25, 42);

            //draws owl's body
            fill(94, 88, 73)
            ellipse(300, 257, 51, 58);

            //draws owl's ears
            fill(130, 120, 94)
            triangle(275, 208, 290, 203, 270, 190)
            triangle(315, 203, 325, 208, 330, 190)


            //draws owl's head
            fill(130, 120, 94)
            ellipse(300, 224, 63, 57);

            //draws owl's big eyes
            fill(l, m, n);
            ellipse(290.5, 228, 17, 17);
            ellipse(307.5, 228, 17, 17);

            //draws owl's small eyes
            fill(0, 0, 0)
            ellipse(291, 228.5, 4.2, 4.2);
            ellipse(307, 228.5, 4.2, 4.2);

            //draws owl's nose
            fill(186, 129, 37)
            triangle(296, 232, 302, 232, 299, 237);

            //draws branch
            fill(66, 56, 41)
            rect(250, 285, 145, 10);

            //allows the owl's eyes to change color depending on which side of the screen the user clicks on
            mouseClicked = function() {

                if (mouseX < 330) {
                    r = random(255);
                    g = random(255);
                    b = random(255);
                }

                else {

                    l = random(255);
                    m = random(255);
                    n = random(255);
                }

            };




        };




        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
