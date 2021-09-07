let socket = io();
let name = ""

window.onload = () => {
    name  = prompt("What is your name?")
}



socket.on('message', (incoming) => {
    
    const listDiv = document.getElementById('listOfMessages')
    const createsList = document.createElement("li")
    createsList.innerText = incoming.name + ": " + incoming.message

    listDiv.appendChild(createsList)
})
 

function sendMessage() {
    const input = document.getElementById("message")
    const message = input.value
    input.value = ""

    socket.emit('message', { name, message }) //objekt

    //göra anrop till server
    //tömma input
    //plocka ut(emitta) meddelandet till server
}
