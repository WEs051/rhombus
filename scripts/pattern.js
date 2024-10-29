const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
const diagLength = Math.sqrt(1250);
let count = 0;
function draw() {
    for (let i = 0; i < canvas.width; i += diagLength) {
        count++;
        for (let j = 0, k = 55; j < canvas.height; j += diagLength, k += 25) {
            let colourString = colour(count, k);
            drawRhombus(i, j, colourString);
        }
    }
}
function drawRhombus(x, y, colour) {
    const sideLength = 25;
    ctx.save();
    ctx.translate(x + diagLength / 2, y + diagLength / 2);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.rect(-sideLength / 2, -sideLength / 2, sideLength, sideLength);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.restore();
}
function colour(count, k){
    let temp = "";
    if(count % 3 == 1){
        temp += "rgb(";
        temp += k;
        temp += ", 0, 0";
    } else if(count % 3 == 2){
        temp += "rgb(0, ";
        temp += k;
        temp += ", 0";
    } else if(count % 3 == 0){
        temp += "rgb(0, 0, ";
        temp += k;
        temp += ")";
    }
    return temp;
}
window.onload = draw;