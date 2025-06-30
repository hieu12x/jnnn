const menus = document.querySelectorAll(".title"); 
const openText = document.querySelectorAll(".myText"); 
menus.forEach((el) => {
    el.addEventListener("click", (e) => {
        remover();
        el.nextElementSibling.classList.toggle("active");
    })
})

function remover() {
    openText.forEach((ele) => {
        ele.classList.remove("active");
    })
}
