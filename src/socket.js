import io from 'socket.io-client'
import axios from 'axios'

const socket = io("https://170.170.103.109:3000/company")

socket.on("connection", (message) => {
    console.log(message)
})

axios.get("https://170.170.103.109:3000/")


export default socket