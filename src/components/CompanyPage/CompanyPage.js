import React, { useState } from 'react'
import * as S from './styles'
import Header from '../Public/Header/Header'
import CompanyParentItem from './CompanyParentItem'
import MarkdownView from './MarkdownVeiw'
import ChatView from './ChatView'

import { Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

const CompanyPage = React.memo(() => {
    const [listState, setListState] = useState(false)

    const Title = useSelector(state => state.user.title_state)

    const onClickList = () => {
        setListState(!listState)
    }

    const onClickPhone = () => {

    }

    return (
        <S.Wrapper>
            <Header />
            <S.ContentWrapper>
                <S.ContentHeader>
                    <S.Title width="280px" color="white" fontSize="19px" padding="0 33px" bgColor="#7B00FF">(주)스타트업최고</S.Title>
                    <S.Title>{Title}</S.Title>
                    <div style={{display: "flex"}}>
                        <S.PhoneButton onClick={onClickPhone}><i class="fas fa-phone fa-2x" style={{color: "#7B00FF"}} /></S.PhoneButton>
                        <S.ListButton onClick={onClickList}><i className="fas fa-user-friends fa-2x" style={{color: "#7B00FF"}} /></S.ListButton>
                    </div>
                    {
                        listState === true && (
                        <S.ListWrapper>

                        </S.ListWrapper>)
                    }
                </S.ContentHeader>
                <S.ContentBodyWrapper>
                    <S.ContentBodyLeft>
                        <S.CategoryButton>
                            <S.Line />  
                            <S.PlusButton none><i className="fas fa-plus" /></S.PlusButton>
                        </S.CategoryButton>
                        <CompanyParentItem title="문서" />
                        <CompanyParentItem title="회의" />
                        <CompanyParentItem title="채팅" />
                    </S.ContentBodyLeft>
                    <S.ContentBodyRight>
                        <Route path="/company/document/:MarkName" component={MarkdownView} /> 
                        <Route path="/company/chat/:ChatId" component={ChatView} /> 
                    </S.ContentBodyRight>
                </S.ContentBodyWrapper>
            </S.ContentWrapper>
        </S.Wrapper>
    )
})

export default CompanyPage