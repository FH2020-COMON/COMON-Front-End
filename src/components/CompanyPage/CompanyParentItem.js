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

const CompanyParentItem = (props) => {
    const [state, setState] = useState(false)

    const onClickButton = () => {
        setState(!state)
    }

    return (
        <>
            <S.NotionButton onClick={onClickButton}>
                <S.ArrowIcon className="fas fa-caret-right fa-lg" rotate={state} />
                <S.Title ml="7px" trans>{props.title}</S.Title>
            </S.NotionButton>
            {
                data.map((val, i) => (
                    <MarkdownItem key={i} name={i} index={i} type={state === true ? "in" : "out"} />
                ))
            }
        </>
    )
}

export default CompanyParentItem