import { dogs } from '/data.js'
import Dog from '/Dog.js'
import { isWaiting, getLiked, getDisliked, getNoDogHTML } from '/utils.js'

export {currentDog, render}

let currentDog = {}

document.getElementById('icon-heart').addEventListener('click', getLiked)
document.getElementById('icon-cross').addEventListener('click', getDisliked)


function getCurrentDog() {
    if (dogs.length > 0) {
        currentDog = new Dog(dogs.shift())
    } else {
        currentDog = ''
    }
}

function render () {
    getCurrentDog()
    if (currentDog) {
        document.getElementById('dog-profile').innerHTML = currentDog.getDogProfileHTML()
    } else {
        document.getElementById('dog-profile').innerHTML = getNoDogHTML()
    }
}
render()