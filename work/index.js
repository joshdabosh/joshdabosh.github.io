/*eslint-env browser*/
function resize() {
    "use strict";
    var baseWidth = window.innerWidth,
        footerHeight = parseInt(document.getElementById("footer").getBoundingClientRect().height, 10);
    
    document.getElementById("content").style.paddingBottom = (footerHeight+10)+"px";
    
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