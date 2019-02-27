'use strict';
/* 1)  Fill every paragraph with the last one's content. */
var paragraphs = document.getElementsByTagName('p');
function changeContent(p) {
    var changed = p;
    for (var i = 0; i < changed.length; i++) {
        changed[i].textContent = p[p.length - 1].textContent;
    }
    return changed;
}
/* 2)  Do the same again, but you should keep the cat strong. */
function changeHTML(p) {
    var changed = p;
    for (var i = 0; i < changed.length; i++) {
        changed[i].innerHTML = p[p.length - 1].innerHTML;
    }
    return changed;
}
function pageContent() {
    changeContent(paragraphs);
}
function pageHTML() {
    changeHTML(paragraphs);
}
setInterval(pageContent, 1000);
