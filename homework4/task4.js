const ul = document.createElement("ul");
document.body.appendChild(ul);
var variableArr = [0];
function dynamicList() { //что за название?
    for (m = 0; m < Infinity; m++) {
        let l = prompt("Введите переменную");
        if (l === null || l === "") {
            alert("Действие отменено")
            break
        } else {
            l = Number(l)
            if(String(l) == "NaN") {
                alert("Введите число") 
                break
            } else {
                variableArr[m] = l;
            }
        }
        let sumOfVariableArr = variableArr.reduce((sum, item) => sum + item)
        let li = document.createElement("li");
        li.innerText = sumOfVariableArr;
        ul.appendChild(li);
    } 
    console.log(variableArr);
}
dynamicList();
