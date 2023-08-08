import { dogs } from '/data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogProfileHTML() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
            <img class="profile-photo" src="${avatar}">
            <div class="info">
                <p class="name-age" id="name-age">${name}, ${age}</p>
                <p class="message" id="message">${bio}</p>
            </div>
        `
    }
}

export default Dog