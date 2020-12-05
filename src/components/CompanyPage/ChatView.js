import React from 'react'
import * as S from './styles'
import ChatItem from './ChatItem'

const data = [
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
                <S.ChatInput type="text" placeholder="채팅을 입력하세요." />
                <S.ChatButton>보내기</S.ChatButton>
            </S.ChatBottomWrapper>
        </S.ChatWrapper>
    )
}

export default ChatView