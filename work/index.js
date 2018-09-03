/*eslint-env browser*/
function resize() {
    "use strict";
    var comWidth = parseInt(document.getElementById("com-contribs").getBoundingClientRect().width, 10),
        projWidth = parseInt(document.getElementById("github-projs").getBoundingClientRect().width, 10),
        baseWidth = window.innerWidth;
    
    console.log("com width: "+comWidth);
    console.log("base width: "+baseWidth);

    if (baseWidth > 664){
        document.getElementById("github-projs").style.maxWidth = "50%";
        
        document.getElementById("competitions").style.maxWidth = "28%";
        document.getElementById("com-contribs").style.maxWidth = "28%";
        
        document.getElementById("competitions").style.float = "right";
        document.getElementById("com-contribs").style.float = "right";
    } else if (baseWidth <= 664 && baseWidth >= 494){
        console.log("it's the middle");
        // 1 top 2 bottom display
        document.getElementById("github-projs").style.maxWidth = "100%";
        
        document.getElementById("com-contribs").style.maxWidth = "28%";
        document.getElementById("com-contribs").style.float = "left";
        
        document.getElementById("competitions").style.maxWidth = "28%";
        document.getElementById("competitions").style.float = "right";
    } else if (baseWidth < 494){
        console.log("less than 493");
        document.getElementById("github-projs").style.maxWidth = "100%";
        
        document.getElementById("competitions").style.maxWidth = "100%";
        document.getElementById("competitions").style.float = "left";
        
        document.getElementById("com-contribs").style.maxWidth = "100%";
        document.getElementById("com-contribs").style.float = "left";
    }
    /*
    if (comWidth < 205 && comWidth > 191) {
        document.getElementById("github-projs").style.maxWidth = "89.5%";
        document.getElementById("competitions").style.float = "left";
        document.getElementById("com-contribs").style.float = "right";
    } else if (comWidth <= 191){
        document.getElementById("github-projs").style.maxWidth = "89.5%";
        document.getElementById("competitions").style.maxWidth = "89.5%";
        document.getElementById("com-contribs").style.maxWidth = "89.5%";
        
        document.getElementById("competitions").style.float = "left";
        document.getElementById("com-contribs").style.float = "left";
    }
    else{
        document.getElementById("github-projs").style.maxWidth = "50%";
        document.getElementById("competitions").style.maxWidth = "28%";
        document.getElementById("com-contribs").style.maxWidth = "28%";
        document.getElementById("competitions").style.float = "right";
        document.getElementById("com-contribs").style.float = "right";
    }
    */
    
    //document.getElementById("competitions").style.width = comWidth+"px";
    
}

window.onload=resize();