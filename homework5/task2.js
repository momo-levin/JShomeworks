const div = document.createElement('div');
div.setAttribute('id', 'aboba')
document.body.appendChild(div);
let arr = [];
function elementAdd() {
    const p = document.createElement('p');
    p.innerText = 'у меня в коробке из-под спичек кетчуп';
    div.appendChild(p);
}
function elementDelete() {
    document.getElementById('aboba').lastChild.remove();
}
document.getElementById('add').addEventListener('click', elementAdd);
document.getElementById("delete").addEventListener('click', elementDelete);
