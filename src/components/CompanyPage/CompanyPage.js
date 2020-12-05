import React, { useState, useRef, useEffect } from 'react'
import * as S from './styles'
import Header from '../Public/Header/Header'
import CompanyParentItem from './CompanyParentItem'
import MarkdownView from './MarkdownVeiw'
import ChatView from './ChatView'
import ProfileCard from './ProfileCard'

import { Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { ModalState } from '../../modules/actions/userAction'

const CompanyPage = React.memo(() => {
    const [listState, setListState] = useState(false)
    const dispatch = useDispatch()
    const start = useRef()

    const Title = useSelector(state => state.user.title_state)

    const onClickList = () => {
        setListState(!listState)
    }

    const onClickPhone = () => {
        dispatch(ModalState("StartInterview"))
    }

    const onClickNewDocument = () => {
        dispatch(ModalState("Category"))
    }

    const onClickNewElement = () => {
        dispatch(ModalState("Element"))
    }

    useEffect(() => {
        start.current = true
    }, [])

    return (
        <S.Wrapper>
            <Header margin={true} />
            <S.ContentWrapper>
                <S.ContentHeader>
                    <S.Title justify width="280px" color="white" fontSize="19px" padding="0 33px" bgColor="#7B00FF">
                        <span>(주)스타트업최고</span>
                        <S.CategoryButton onClick={onClickNewDocument}>
                            <i class="fas fa-file-medical fa-2x" style={{color: "white"}} />
                        </S.CategoryButton>
                    </S.Title>
                    <S.Title>{Title}</S.Title>
                    <div style={{display: "flex"}}>
                        <S.PhoneButton onClick={onClickPhone}><i class="fas fa-phone fa-2x" style={{color: "#7B00FF"}} /></S.PhoneButton>
                        <S.ListButton onClick={onClickList}><i className="fas fa-user-friends fa-2x" style={{color: "#7B00FF"}} /></S.ListButton>
                    </div>
                    <S.ListWrapper type={listState === true ? "in" : start.current === true ? "out" : "asd"}>
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </S.ListWrapper>
                </S.ContentHeader>
                <S.ContentBodyWrapper>
                    <S.ContentBodyLeft>
                        <CompanyParentItem title="문서" onClick={onClickNewElement} />
                        <CompanyParentItem title="회의" onClick={onClickNewElement} />
                        <CompanyParentItem title="채팅" onClick={onClickNewElement} />
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