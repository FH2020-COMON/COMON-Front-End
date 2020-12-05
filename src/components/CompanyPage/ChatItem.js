import React, { useEffect } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { myInfor } from '../../modules/actions/userAction'

const ChatItem = (props) => {
    const dispatch = useDispatch()
    const infor = useSelector(state => state.user.my_infor)

    useEffect(() => {
        dispatch(myInfor())
    }, [dispatch])

    return(
        <>
            <S.ChatItemWrapper>
                <S.Title other={infor.data && infor.data.data.name === props.user ? false : true} line padding="28px 0 10px 0" fontSize="15px">{props.user}</S.Title>
                <S.ChatItem other={infor.data && infor.data.data.name === props.user ? false : true}>{props.message}</S.ChatItem>
            </S.ChatItemWrapper>
        </>
    )
}

export default ChatItem