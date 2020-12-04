import React, { useState } from 'react'
import * as S from './styles'
import Header from '../Public/Header/Header'
import CompanyParentItem from './CompanyParentItem'
import MarkdownView from './MarkdownVeiw'

import { Route } from 'react-router-dom'

const CompanyPage = React.memo(() => {
    const [listState, setListState] = useState(false)

    const onClickList = () => {
        setListState(!listState)
    }

    return (
        <S.Wrapper>
            <Header />
            <S.ContentWrapper>
                <S.ContentHeader>
                    <S.Title width="280px" color="white" fontSize="19px" padding="0 15px" bgColor="#7B00FF">(주)스타트업최고</S.Title>
                    <S.ListButton onClick={onClickList}><i className="fas fa-user-friends fa-2x" style={{color: "#7B00FF"}} /></S.ListButton>
                    {
                        listState === true && (
                        <S.ListWrapper>

                        </S.ListWrapper>)
                    }
                </S.ContentHeader>
                <S.ContentBodyWrapper>
                    <S.ContentBodyLeft>
                        <CompanyParentItem title="문서" />
                        <CompanyParentItem title="회의" />
                        <CompanyParentItem title="채팅" />
                    </S.ContentBodyLeft>
                    <S.ContentBodyRight>
                        <Route path="/company/:MarkName" component={MarkdownView} /> 
                    </S.ContentBodyRight>
                </S.ContentBodyWrapper>
            </S.ContentWrapper>
        </S.Wrapper>
    )
})

export default CompanyPage