/*eslint-env browser*/
function resize() {
    "use strict";
    var comWidth = parseInt(document.getElementById("com-contribs").getBoundingClientRect().width, 10),
        projWidth = parseInt(document.getElementById("github-projs").getBoundingClientRect().width, 10),
        baseWidth = window.innerWidth;
    
    //console.log("com width: "+comWidth);
    //console.log("base width: "+baseWidth);

    if (baseWidth > 664){
        // default state
        
        document.getElementById("github-projs").style.maxWidth = "50%";
        
        document.getElementById("competitions").style.maxWidth = "28%";
        document.getElementById("com-contribs").style.maxWidth = "28%";
        
        document.getElementById("competitions").style.float = "right";
        document.getElementById("com-contribs").style.float = "right";
    } else if (baseWidth <= 664 && baseWidth >= 494){
        // console.log("it's the middle");
        
        document.getElementById("github-projs").style.maxWidth = "100%";
        
        document.getElementById("com-contribs").style.maxWidth = "30%";
        document.getElementById("com-contribs").style.float = "left";
        
        document.getElementById("competitions").style.maxWidth = "30%";
        document.getElementById("competitions").style.float = "right";
    } else if (baseWidth < 494){
        // console.log("less than 493");
        
        document.getElementById("github-projs").style.maxWidth = "100%";
        
        document.getElementById("competitions").style.maxWidth = "100%";
        document.getElementById("competitions").style.float = "left";
        
        document.getElementById("com-contribs").style.maxWidth = "100%";
        document.getElementById("com-contribs").style.float = "left";
    }
}

window.onload=resize();