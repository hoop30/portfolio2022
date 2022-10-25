// link select
const links = document.querySelectorAll('.social>a')

links.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
        const modal = e.target.firstChild.nextElementSibling

        modal.classList.add('visible')
    })

    link.addEventListener('mouseleave', (e) => {
        const modal = e.target.firstChild.nextElementSibling

        modal.classList.remove('visible')
    })
})