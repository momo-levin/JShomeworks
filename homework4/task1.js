let p = document.createElement("p");
p.setAttribute("class", "text");
p.innerText = ("Это всего лишь текст");
document.body.prepend(p);
let div = document.createElement("div");
div.setAttribute("class", "alert");
div.innerText = ("А это сообщение об ошибке"); 
document.body.append(div);