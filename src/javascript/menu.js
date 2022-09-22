const ul = document.querySelector('.menu-content')
const menuBtn = document.querySelector('#menuBtn')

menuBtn.addEventListener('click', () => toggleMenu())

function toggleMenu() {
    
    menuBtn.style.transform = "scale(1.1, 0.8)"
    ul.classList.toggle('hidden-menu')

    setTimeout(() => {
        menuBtn.style.transform = "none"
    }, 300)
}