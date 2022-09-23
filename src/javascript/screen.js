const laltopScreen = document.querySelector('.screen')
let i = 1

setInterval(() => {

    laltopScreen.src = `./src/assets/helloWorld/hello-world${i}.png`
    i++

    if (i > 173) {
        i = 1
    }
},150)