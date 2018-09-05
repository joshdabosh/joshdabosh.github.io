/*eslint-env browser*/
function start() {
    "use strict";
    if (document.getElementById) {
        var el_About = document.getElementById("about");
        
        /* make dropdown work */
        var navRoot = el_About;
        for (var i=0; i<navRoot.childNodes.length; i++) {
            var node = navRoot.childNodes[i];
            if (node.nodeName=="LI") {
                node.onmouseover=function() {
                    this.className+=" over";
                }
                node.onmouseout=function() {
                    this.className=this.className.replace(" over", "");
                }
            }
        }
    }
}
window.onload=start;