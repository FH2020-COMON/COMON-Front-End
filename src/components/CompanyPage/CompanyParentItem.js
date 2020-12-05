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
    const hello = useRef()

    const ChatRoomList = useSelector(state => state.user.room_list)
    const dispatch = useDispatch()

    const onClickButton = () => {
        setState(!state)
    }

    const onClickNewElement = () => {
        dispatch(ModalState("Element"))
    }

    useEffect(() => {
        hello.current = true
    }, [])

    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

    if (ChatRoomList.loading) return <div>로딩중...</div>;
    if (ChatRoomList.error) return <div>에러 발생!</div>;
    if (!ChatRoomList.data) return null;
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
                ChatRoomList.data.map((val, i) => (
                    <MarkdownItem key={i} name={i} index={i} type={state === true ? "in" : hello.current === true ? "out" : "asd"} chat={props.title === "채팅" ? true : false} />
                )))
                 : (
                    data.map((val, i) => (
                        <MarkdownItem key={i} name={i} index={i} type={state === true ? "in" : hello.current === true ? "out" : "asd"} chat={props.title === "채팅" ? true : false} />
                    ))
                )
            }
        </>
    )
})

export default CompanyParentItem