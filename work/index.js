/*eslint-env browser*/
function resize() {
    "use strict";
    var comWidth = parseInt(document.getElementById("com-contribs").getBoundingClientRect().width, 10);
    
    if (comWidth < 205) {
        document.getElementById("github-projs").style.width = "89.5%";
    } else{
        document.getElementById("github-projs").style.width = "50%";
    }
    
}

window.onload=resize();