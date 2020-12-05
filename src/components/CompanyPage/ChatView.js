import React, { useState } from 'react'
import * as S from './styles'
import ChatItem from './ChatItem'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { getRooms } from '../../modules/actions/userAction'

import { baseURL } from '../../socket'

const ChatView = (props) => {
    const [chat, setChat] = useState("")
    const roomId = useSelector(state => state.user.room_id)
    const chats = useSelector(state => state.user.chats)
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitChat = async e => {
        e.preventDefault()

        await axios({
            url: `${baseURL}/company/chat/${roomId}`,
            method: "POST",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("access_token")
            },
            data: {
                chat: chat
            }
        })
    }

    const onChangeChat = e => {
        console.log(chats)
        setChat(e.target.value)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center"}}>
            <S.ChatWrapper>
                <S.ChatTopWrapper>
                    {
                        chats ? chats.map(val => (
                            <ChatItem user={val.user_name} message={val.chat} />
                        )) : <></>
                    }
                </S.ChatTopWrapper>
            </S.ChatWrapper>
            <S.ChatBottomWrapper onSubmit={onSubmitChat}> 
                <S.ChatInput value={chat} onChange={onChangeChat} type="text" placeholder="채팅을 입력하세요." />
                <S.ChatButton>보내기</S.ChatButton>
            </S.ChatBottomWrapper>
        </div>
    )
}

export default ChatView