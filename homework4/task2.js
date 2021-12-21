function charRepeats(str) {
    for(let b = 0; b <= str.length; b++) {
        for(let j = b+1; j <= str.length; j++) {
            if(str[j] == str[b]) {
                return true;
            }
        }
    }
    return false;
}

let newArr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
let ol = document.createElement("ol");
document.body.append(ol);
for (let i = 0; i < 11; i++) { //почему 11, а не newArr.length?
    let li = document.createElement("li");
    li.innerText = (newArr[i]);
    if (i % 2 == 1) {
        li.setAttribute("class" , "even");
    } else {
        li.setAttribute("class", "odd");
    }
    if (charRepeats(newArr[i]) == true) {
        li.classList.add("white");
    } 
    ol.appendChild(li);
    
}
