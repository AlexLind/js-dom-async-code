const body = document.querySelector('body')
const counterText = document.createElement('h1')
let counter = 10

function addCounter() {    
    counterText.classList.add('counter')
    counterText.innerHTML = counter
    document.body.append(counterText)
}

if (counter == 0) {
    console.log('here')
    stopCounter()
}
function updateCounter() {
    counter--
    counterText.innerHTML = counter
    console.log(counter)
    if (counter == 0) {
        console.log('here')
        stopCounter()
    }
}

function stopCounter() {
    clearInterval(myInterval)
}

addCounter()
const myInterval = setInterval(updateCounter, 1000)
