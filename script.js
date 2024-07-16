const container = document.querySelector(".container");
const textBtn = document.querySelectorAll(".text-btn");
const textCont = document.querySelector(".text-container");

textBtn.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        container.classList.toggle("right-panel-active");
    })
})