function drawFigure(type, color, top, left, width, height) {
    if (type == "круг") {
        let div = document.createElement('div');
        div.style.background = color;
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.borderRadius = "50%";
        div.style.width = width*2 + "px";
        div.style.height = width*2+ "px";
        div.style.position = "absolute";
        document.body.appendChild(div);
    } else if (type == "квадрат") {
        let div = document.createElement('div') 
        div.style.background = color;
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.width = width + "px";
        div.style.height = width + "px";
        div.style.position = "absolute";
        document.body.appendChild(div);   
    } else if (type == "прямоугольник") {
        let div = document.createElement('div') 
        div.style.background = color;
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.position = "absolute";
        document.body.appendChild(div);
    } 
}

drawFigure("круг", "red", 200, 200, 40);
drawFigure("квадрат", "red", 100, 200, 40);
drawFigure("прямоугольник", "red", 100, 500, 40, 200);


