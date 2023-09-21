'use strict';
window.onload = function () {
    update = document.getElementById("update");
    const e = update.innerText.replace(' AT ', String.fromCharCode(64)).replaceAll(' DOT ', String.fromCharCode(46));
    update.innerText = e;
    update.href = 'mailto:' + e;
}
