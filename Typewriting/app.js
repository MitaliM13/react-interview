const typedContainer = document.querySelector(".typed-text")
const cursor = document.querySelector(".cursor")

let words = ["Awesome!!", "Fun!!", "Cool!!", "Life!!", "Famous!!"]

const typingDelay  = 200
const erasingDelay  = 200
const newLetterDelay  = 2000 
let index = 0
let charIndex = 0

document.addEventListener("DOMContentLoaded", () => {
    if(words.length){
        setTimeout(typed, newLetterDelay)
    }
})

function typed() {
    if(charIndex < words[index].length){
        typedContainer.textContent += words[index].charAt(charIndex)
        charIndex++
        setTimeout(typed, typingDelay)
    } else { 
        setTimeout(erase, newLetterDelay)
    }
}

function erase(){
    if(charIndex > 0){
        typedContainer.textContent = words[index].substring(0, charIndex - 1)
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else {
        index++
        if(index >= words.length){
            index = 0
        }
        setTimeout(typed, typingDelay + 1100)
    }
}