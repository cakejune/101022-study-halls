const newh1 = document.createElement('h1')
document.body.prepend(newh1)
newh1.textContent = '🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭🥭'

// we don't have to remove it as soon as we add it, this is just for the lols
newh1.remove()

const allmyh1 = document.querySelectorAll('h1') 
const secondH1 = allmyh1[1]

function addPineapples() {
    allmyh1.forEach(h1 => h1.textContent += "🍍") 
}

function changeSecondH1() {
    secondH1.innerHTML = "Words phrases strings <span style='color: red'>I am a span</span>" 
}