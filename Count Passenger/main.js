let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-El")
let count = 0

// console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent+= countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}






// let countEl = document.getElementById("count-El")

// console.log(countEl)

// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// console.log(countEl)



// let saveEl= document.getElementById("save-el")

// console.log(saveEl)

// function save() {
//     let countStr = count + " - "
//     saveEl.innerText += count
//     console.log(count)
// }



// let username = "per"

// let message = "you have three new notifications"

// console.log(message + ", " + username + "!")

// let name = "Chris"

// let greetings = "Hi, my name is"

// let myGreetings = (greetings + " " + name)

// console.log(myGreetings)

// let welcomeEl = document.getElementById("welcome-El")

// let greetings = "Welcome back, "

// let name = "Christian Ugoh"

// welcomeEl.innerText = greetings + name

// welcomeEl.innerText += ""

