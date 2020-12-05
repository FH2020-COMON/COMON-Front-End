import io from 'socket.io-client'

class Socket {
    constructor() {
        this.socket = io("http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/company")

        this.store = null
    }

    roomInit () {
        this.socket.on("room", () => {

        })
    }
}

export const baseURL = "http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com"

export default Socket