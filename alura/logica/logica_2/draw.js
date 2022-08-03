function setCanvasFillStyle(canvas, color = "black") {

    canvas.fillStyle = color;

}

function resetCanvasPath(canvas) {

    canvas.beginPath();

}

function drawRect({ canvas, x, y, width, height, color = "black", colorBorder = "black" }) {

    setCanvasFillStyle(canvas, color);
    canvas.fillRect(x, y, width, height);
    canvas.strokeStyle = colorBorder;
    canvas.strokeRect(x, y, width, height);
}


function drawTriangle({ canvas, x, y, lineOneX, lineOneY, lineTwoX, lineTwoY, color = "black" }) {

    setCanvasFillStyle(canvas, color);
    resetCanvasPath(canvas);
    canvas.moveTo(x, y);
    canvas.lineTo(lineOneX, lineOneY);
    canvas.lineTo(lineTwoX, lineTwoY);
    canvas.fill();
}


function drawArc({ canvas, x, y, radius, iniAngle = 0, endAngle, color = "black" }) {

    setCanvasFillStyle(canvas, color);
    resetCanvasPath(canvas);
    canvas.arc(x, y, radius, iniAngle, endAngle);
    canvas.fill();
}

function drawText({ canvas, x, y, text, font = "20px Arial", color = "black" }) {

    setCanvasFillStyle(canvas, color);
    canvas.font = font;
    canvas.fillText(text, x, y);
}



