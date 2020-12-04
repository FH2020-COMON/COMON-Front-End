import React from 'react'
import MarkdownItem from './MarkdownItem'
import * as S from './styles'

const MarkdownView = (props) => {
    return (
        <S.ViewWrapper>
            {
                props.match.params.MarkName
            }
        </S.ViewWrapper>
    )
}

export default MarkdownView