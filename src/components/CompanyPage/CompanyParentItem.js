import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'

import MarkdownItem from './MarkdownItem'

import {getRooms} from '../../modules/actions/userAction'

import { ModalState } from '../../modules/actions/userAction'

const data = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]   

const CompanyParentItem = React.memo((props) => {
    const [state, setState] = useState(false)
    const [list, setList] = useState([])
    const hello = useRef()

    const ChatRoomList = useSelector(state => state.user.room_list)
    const dispatch = useDispatch()

    const onClickButton = () => {
        hello.current = true
        setState(!state)
    }

    const onClickNewElement = () => {
        dispatch(ModalState(`Element${props.title === "채팅" ? "Chat" : "Document"}`))
    }

    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

    useEffect(() => {
        console.log(list)
        setList(ChatRoomList)
    }, [ChatRoomList])

    if (list.loading) return <div>로딩중...</div>;
    if (list.error) return <div>에러 발생!</div>;
    if (!list.data) return null;
    return (
        <>
            <S.ButtonsWrapper>
                <S.NotionButton onClick={onClickButton}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <S.ArrowIcon className="fas fa-caret-right fa-lg" rotate={state} style={{color: "rgb(80, 80, 80)"}} />
                        <S.Title ml="7px" color="rgb(80, 80, 80)" trans>{props.title}</S.Title>
                    </div>
                </S.NotionButton>
                <S.PlusButton onClick={onClickNewElement}><i className="fas fa-plus" /></S.PlusButton>
            </S.ButtonsWrapper>
            {
                props.title === "채팅" ? (
                list.data.map((val, i) => (
                    <MarkdownItem chats={val.chats} title={val.title} roomId={val.room_id} key={i} name={i} index={i} type={state === true ? "in" : hello.current === true ? "out" : "asd"} chat={props.title === "채팅" ? true : false} />
                )))
                 : (
                    data.map((val, i) => (
                        <MarkdownItem title="회의록" key={i} name={i} index={i} type={state === true ? "in" : hello.current === true ? "out" : "asd"} chat={props.title === "채팅" ? true : false} />
                    ))
                )
            }
        </>
    )
})

export default CompanyParentItem