import React from 'react'
import * as S from './styles'
import ChatItem from './ChatItem'

const data = [
    {
        user: "qwer1234",
        message: "안녕"
    },
    {
        user: "qwer1234",
        message: "안녕"
    },
    {
        user: "qwer1234",
        message: "안녕"
    }
]

const ChatView = (props) => {
    return (
        <S.ChatWrapper>
            <S.ChatTopWrapper>
                {
                    data.map(val => (
                        <ChatItem user={val.user} message={val.message} />
                    ))
                }
            </S.ChatTopWrapper>
            <S.ChatBottomWrapper onSubmit={(e) => {e.preventDefault()}}> 
                <S.ChatInput type="text" />
                <S.ChatButton>보내기</S.ChatButton>
            </S.ChatBottomWrapper>
        </S.ChatWrapper>
    )
}

export default ChatView