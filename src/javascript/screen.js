//variables
const laltopScreen = document.querySelector('.screen')
const iphoneScreen = document.querySelector('#iphone-screen')
const laltopSkillsScreen = document.querySelector('#laltopSkillsScreen')
let i = 1
let y = 0
let z = 0
let reverse = false

//intervales

//laltop home
setInterval(() => {

    laltopScreen.src = `./src/assets/helloWorld/hello-world${i}.png`
    i++

    if (i > 173) {
        i = 1
    }
}, 150)

//iphone skills
setInterval(() => {
    
    iphoneScreen.src = `./src/assets/Mobile/mobile${y}.png`

    if (y === 160) {
        reverse = true
    } else if (y === 0) {
        reverse = false
    }

    reverse ? y-- : y++
}, 150)

//laltop skills
setInterval(() => {
    
    laltopSkillsScreen.src = `./src/assets/laltopSkills/laltop${z}.png`
    z++

    if (z > 204) {
        z = 0
    }
}, 150)