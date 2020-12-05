import React, { useEffect, useRef, useState } from 'react'

import * as S from './styles'

import MarkdownItem from './MarkdownItem'

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

    const onClickButton = () => {
        setState(!state)
    }

    useEffect(() => {
        hello.current = true
    }, [])

    return (
        <>
            <S.ButtonsWrapper>
                <S.NotionButton onClick={onClickButton}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <S.ArrowIcon className="fas fa-caret-right fa-lg" rotate={state} style={{color: "rgb(80, 80, 80)"}} />
                        <S.Title ml="7px" color="rgb(80, 80, 80)" trans>{props.title}</S.Title>
                    </div>
                </S.NotionButton>
                <S.PlusButton onClick={() => {console.log('asd')}}><i className="fas fa-plus" /></S.PlusButton>
            </S.ButtonsWrapper>
            {
                data.map((val, i) => (
                    <MarkdownItem key={i} name={i} index={i} type={state === true ? "in" : hello.current === true ? "out" : "asd"} chat={props.title === "채팅" ? true : false} />
                ))
            }
        </>
    )
})

export default CompanyParentItem