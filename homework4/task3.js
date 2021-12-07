let newArr1 = [];
function showMessage(message, background, top, left) {
    const div = document.createElement("div");
    div.innerText = (message);
    div.style.backgroundColor = background;
    div.style.top = top + "px";
    div.style.left = left + "px";
    div.classList.add("div-pos")
    newArr1.push(div);
    for (c = 0; c < newArr1.length; c++) {
        document.body.appendChild(newArr1[c]) 
    }
}


console.log(newArr1)

showMessage("sdfsdfsdf", "blue", 400, 100);
showMessage("sdfsdfsdf", "red", 400, 200);
showMessage("sdfsdfsdf", "brown", 400, 300);
showMessage("sdfsdfsdf", "green", 400, 400);
showMessage("sdfsdfsdf", "blue", 400, 500);
showMessage("sdfsdfsdf", "blue", 400, 600);
