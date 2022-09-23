// variables
const messageSend = document.querySelector('#messageSend')
const btnSend = document.querySelector('#btnSend')
const formFirstName = document.querySelector('#first-name')
const formLastName = document.querySelector('#last-name')
const formMail = document.querySelector('#email')
const formSubject = document.querySelector('#subject')
const formMessage = document.querySelector('#message')
const mailTester = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/i

// Listener
btnSend.addEventListener('click', (e) => send(e))
formFirstName.addEventListener('blur', (e) => Resetstyle(e))
formMail.addEventListener('blur', (e) => Resetstyle(e))
formMessage.addEventListener('blur', (e) => Resetstyle(e))

// function send
function send(e) {
    
    // Send check
    if (formFirstName.value === "" || formMail.value === "" || formMessage.value === "" || !mailTester.test(formMail.value)) {
        e.preventDefault()
        badFilling(formFirstName)
        badFilling(formMail)
        badFilling(formMessage)
    } else if (formFirstName.value !== "" && formMail.value !== "" && formMessage.value !== "" && mailTester.test(formMail.value)) {
        sendOk()
    }
}

function sendOk () {
    messageSend.classList.add('send')
    
    setTimeout (() => {
        messageSend.classList.remove('send')
        
    }, 5000)

    setTimeout (() => {
        formFirstName.value = ""
        formLastName.value = ""
        formMail.value = ""
        formSubject.value = ""
        formMessage.value = ""
    }, 500)
}

// function style
function badFilling(input) {
    if (input.value === "") {
        console.log('ok');
        input.parentNode.classList.add('dontSend')
    } else {
        input.parentNode.classList.remove('dontSend')
    }

    if (input.id === "email") {
        if (mailTester.test(input.value)) {
            input.parentNode.classList.remove('dontSend') 
        } else {
            input.parentNode.classList.add('dontSend')
        }
    }
}

function Resetstyle(e) {
    if (e.target.parentNode.className.includes('dontSend')) {
        badFilling(e.target)
    }
}