const inputs = document.querySelectorAll('input')
const textA = document.querySelector('textarea')

inputs.forEach(input => {
    input.addEventListener('focus',(e) => {
        e.target.parentNode.style.padding = '3px'
    })
    input.addEventListener('blur',(e) => {
        e.target.parentNode.style.padding = '2px'
    })
})

textA.addEventListener('focus',(e) => {
    e.target.parentNode.style.padding = '3px'
})
textA.addEventListener('blur',(e) => {
    e.target.parentNode.style.padding = '2px'
})