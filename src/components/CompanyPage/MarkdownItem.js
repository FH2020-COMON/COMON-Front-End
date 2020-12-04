import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

const MarkdownItem = (props) => {
    return (
        <Link style={{textDecoration: "none"}} to={"/company/" + props.name}>
            <S.ItemWrapper>
                <S.Title padding="8px 0" fontSize="18px">회의록</S.Title>
            </S.ItemWrapper>
        </Link>
    )
}

export default MarkdownItem