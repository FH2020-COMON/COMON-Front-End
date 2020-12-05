import * as S from './styles'

const ChatItem = (props) => {
    return(
        <>
            <S.ChatItemWrapper>
                <S.Title other={true} line padding="28px 0 10px 0" fontSize="15px">{props.user}</S.Title>
                <S.ChatItem other={true}>{props.message}</S.ChatItem>
            </S.ChatItemWrapper>
        </>
    )
}

export default ChatItem