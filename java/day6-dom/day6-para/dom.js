
function changeColor(para) {
    if (para.style.color == "red") {
        para.style.color = "green"
    }
    else if (para1.style.color == "green") {
        para.style.color = "blue"
    }
    else if (para1.style.color == "blue") {
        para.style.color = "black"
    }
    else (para.style.color = "red");
}
function changeBGColor(para) {
    if (para.style.backgroundColor == "red") {
        para.style.backgroundColor = "green"
    }
    else if (para1.style.backgroundColor == "green") {
        para.style.backgroundColor = "blue"
    }
    else if (para1.style.backgroundColor == "blue") {
        para.style.backgroundColor = "white"
    }
    else (para.style.backgroundColor = "red");
}
var undo1 = para1.innerHTML;
var undo2 = para2.innerHTML;
function copyContent(para) {
    copy = para.innerHTML;
}
function pasteContent(para) {
    para.innerHTML = copy;
}
function undoContent(para) {
    if (para == para1) { para.innerHTML = undo1; }
    if (para == para2) { para.innerHTML = undo2; }
}
function changeFontSize(fontSize, para) {
para.style.fontSize=fontSize.value;
console.log(fontSize.value);
}
para1.style.fontSize="16px";
para2.style.fontSize="16px";
function increaseFontSize(para) {
    pixel= parseInt(para.style.fontSize);
    pixel++;
    para.style.fontSize=pixel+"px";
}
function decreaseFontSize(para) {
    pixel= parseInt(para.style.fontSize);
    pixel--;
    para.style.fontSize=pixel+"px";
}
