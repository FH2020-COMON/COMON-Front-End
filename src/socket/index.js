import io from 'socket.io-client'

import { getChatInfor, getRoomId, newRoom } from '../modules/actions/userAction'

class Socket {
    constructor() {
        this.socket = io("http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/company")

        this.store = null
    }

    setStore(store) {
        this.store = store
    }

    Init () {
        //user, roomId, chat
        this.socket.on("chat", chatInfor => {
            console.log("asd"+chatInfor)
            this.store.dispatch(getChatInfor(chatInfor))
        })

        this.socket.on("join Room", roomId => {
            this.store.dispatch(getRoomId(roomId))
        })

        this.socket.on("newRoom", roomInfor => {
            this.store.dispatch(newRoom(roomInfor))
        })
    }
}

const s = new Socket()

export const baseURL = "http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com"

export default s