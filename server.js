const express = require('express')
const server = express()
const http = require('http').createServer(server)
const io = require('socket.io')(http)

const port = 3000 //porten 

io.on('connection', (socket) => { //körs för varje klient


    socket.on("message", (incoming) => {
        io.emit("message", incoming)
        console.log(incoming)
    })

    socket.on("disconnect", () => {
        console.log("user disconnected")
    })
})

//socket = klient

server.use(express.static('public'));

http.listen(port, () => console.log("Tjohoo! det fungerar" + port))

//med koden över är klienterna kopplade till en socket.io instans.