import * as S from './styles'
import socket from '../../socket'

const ChatItem = (props) => {
    return(
        <>
            <S.ChatItemWrapper>
                <S.Title line padding="28px 0 10px 0" fontSize="15px">{props.user}</S.Title>
                <S.ChatItem>{props.message}</S.ChatItem>
            </S.ChatItemWrapper>
        </>
    )
}

export default ChatItem