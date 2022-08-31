const body = document.querySelector('body')
const counterText = document.createElement('h1')
const button = document.createElement('button')
let counter = 10

function addCounter() {    
    counterText.classList.add('counter')
    counterText.innerHTML = counter
    document.body.append(counterText)
}

function addButton() {
    button.classList.add('button')
    button.setAttribute('onclick', 'buttonClick()')
    button.addEventListener("click", buttonClick);
    button.innerHTML = 'Reset'
    document.body.append(button)
}

function updateCounter() {
    counter--
    counterText.innerHTML = counter
    console.log(counter)
    if (counter == 0) {
        console.log('here')
        stopCounter()
        counterText.style.color = 'red' 
        counterText.style.animation = "blinker-ended 1s linear infinite";
    }
}

function stopCounter() {
    clearInterval(myInterval)
}

function buttonClick() {
    window.location.reload();
}



addCounter()
addButton()
const myInterval = setInterval(updateCounter, 1000)
