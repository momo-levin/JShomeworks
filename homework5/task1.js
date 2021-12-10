const closeModal = (e) => {
    document.getElementsByClassName("modal-window")[0].classList.toggle('none', false);
    
}
const showModal = (e) => {
    document.getElementsByClassName("modal-window")[0].classList.toggle('none');
}
document.getElementById("nav").addEventListener('mouseenter', closeModal);
document.getElementById("nav").addEventListener('mouseleave', showModal)




