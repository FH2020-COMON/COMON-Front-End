import React, { useState, useRef, useEffect } from 'react'
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

    const onClickButton = () => {
        setState(!state)
    }

    return (
        <>
            <S.NotionButton onClick={onClickButton}>
                <S.ArrowIcon className="fas fa-caret-right fa-lg" rotate={state} style={{color: "rgb(80, 80, 80)"}} />
                <S.Title ml="7px" color="rgb(80, 80, 80)" trans>{props.title}</S.Title>
            </S.NotionButton>
            {
                data.map((val, i) => (
                    <MarkdownItem key={i} name={i} index={i} type={state === true ? "in" : "out"} chat={props.title === "채팅" ? true : false} />
                ))
            }
        </>
    )
})

export default CompanyParentItem