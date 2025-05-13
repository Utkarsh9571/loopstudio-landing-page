const iconOpen = document.querySelector('.hamburger')
const iconClose = document.querySelector('.icon-close')
const menu = document.getElementById('menu')
console.log(menu)

iconOpen.addEventListener('click', ()=>{
    menu.style.transform = "translateX(0)"
})
iconClose.addEventListener('click', ()=>{
    menu.style.transform = "translateX(750px)"
})