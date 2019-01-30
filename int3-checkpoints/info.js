var sunnyside=document.getElementById("sunnyside");
var scrambledegg=document.getElementById("scrambledegg");
var omelet=document.getElementById("omelet");
var display=document.getElementById("display");

//clicks on sunny side up egg//
sunnyside.addEventListener("click", function(){
    display.innerHTML= "I love sunnyside up eggs!";
});

//clicks on scrambled egg//
scrambledegg.addEventListener("click", function(){
    display.innerHTML="I love scrambled eggs!";
});

//clicks on omlet//
omelet.addEventListener("click", function(){
    display.innerHTML="I love omelets!";
});

//document.body.style.backgroundColor=newBGColor. =249, 235, 142;//