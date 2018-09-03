/*eslint-env browser*/
function resize() {
    "use strict";
    var comWidth = parseInt(document.getElementById("com-contribs").getBoundingClientRect().width, 10);
    console.log(comWidth)
    
    if (comWidth < 205 && comWidth > 191) {
        document.getElementById("github-projs").style.width = "89.5%";
        document.getElementById("competitions").style.float = "left";
        document.getElementById("com-contribs").style.float = "right";
    } else if (comWidth <= 191){
        document.getElementById("github-projs").style.width = "89.5%";
        document.getElementById("competitions").style.maxWidth = "89.5%";
        document.getElementById("com-contribs").style.maxWidth = "89.5%";
        
        document.getElementById("competitions").style.float = "left";
        document.getElementById("com-contribs").style.float = "left";
    }
    else{
        document.getElementById("github-projs").style.width = "50%";
        document.getElementById("competitions").style.maxWidth = "28%";
        document.getElementById("com-contribs").style.maxWidth = "28%";
        document.getElementById("competitions").style.float = "right";
        document.getElementById("com-contribs").style.float = "right";
    }
    
    //document.getElementById("competitions").style.width = comWidth+"px";
    
}

window.onload=resize();