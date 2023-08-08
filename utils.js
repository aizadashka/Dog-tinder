import { currentDog, render } from '/index.js'

export { isWaiting, getLiked, getDisliked, getNoDogHTML }

let isWaiting = false

function getLiked() {
   if (!isWaiting) {
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = true
        document.getElementById('badge-like').classList.remove('hidden')
        setTimeout(() => {
            document.getElementById('badge-like').classList.add('hidden')
            isWaiting = false
            render()
        }, 1000)
   }
}

function getDisliked() {
   if (!isWaiting) {
        currentDog.hasBeenSwiped = true
        document.getElementById('badge-nope').classList.remove('hidden')
        setTimeout(() => {
            document.getElementById('badge-nope').classList.add('hidden')
            isWaiting = false
            render()
        }, 1000)
   }
}


function getNoDogHTML() {
    isWaiting = true
    return `<div class="no-dog">
                <p>No dogs left in your area ☹️</p>
            </div>`
}