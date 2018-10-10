/*eslint-env browser*/
function resize() {
    "use strict";
    var baseWidth = window.innerWidth,
        baseHeight = window.innerHeight;
    
    console.log(baseWidth, baseHeight);
    if (baseWidth > 990){
        // default state
        document.getElementById("content").style.maxWidth = "70%";
        document.getElementById("content").style.width = "70%";
        document.getElementById("nav").style.maxWidth = "27%";
        document.getElementById("nav").style.width = "27%";
        
        document.getElementById("nav-items").style.marginLeft = "0%";
        
        document.getElementById("content").style.float = "right";
        document.getElementById("nav").style.float = "left";
    } else if (baseWidth <= 990){
        // minimized state
        document.getElementById("content").style.maxWidth = "100%";
        document.getElementById("content").style.width = "100%";
        
        document.getElementById("content").style.float = "left";
        
        document.getElementById("nav").style.maxWidth = "100%";
        document.getElementById("nav").style.width = "100%";
        document.getElementById("nav-items").style.marginLeft = "6%";
        
        document.getElementById("nav").style.maxHeight = "20%";
        document.getElementById("nav").style.float = "left"
    }
}

window.onload=resize();