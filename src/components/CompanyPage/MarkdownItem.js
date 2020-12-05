import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { TitleState } from '../../modules/actions/userAction'

const MarkdownItem = (props) => {
    const dispatch = useDispatch()

    const onClickTitle = () => {
        dispatch(TitleState("회의록"))
    }

    return (
        <Link onClick={onClickTitle} style={{textDecoration: "none"}} to={`/company/${props.chat === true ? "chat" : "document"}/${props.name}`}>
            <S.ItemWrapper index={props.index} type={props.type}>
            <S.Title color="rgb(80, 80, 80)" padding="8px 0" fontSize="18px">회의록</S.Title>
            </S.ItemWrapper>
        </Link>
    )
}

export default MarkdownItem