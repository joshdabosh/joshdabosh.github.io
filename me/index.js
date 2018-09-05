/*eslint-env browser*/
function sizePush() {
    "use strict";
    var toSize = parseInt(document.getElementById("footer").getBoundingClientRect().height, 10);
    document.getElementById("push").style.height = toSize+"px";
}

window.onload=sizePush();