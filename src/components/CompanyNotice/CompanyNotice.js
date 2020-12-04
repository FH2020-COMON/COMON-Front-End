import React from 'react'
import * as S from './styles'
import * as C from '../CrowdFunding/styles'
import Search from '../Public/Search/Search.jsx'
import CrowdList from '../CrowdFunding/CrowdList'
import Header from '../Public/Header/Header'

const CompanyNotice = () => {
    return (
        <S.Wrapper>
            <Header />
            <C.CrowdWrapper>
                <Search state="end"></Search>
                <h4 style={{marginBottom: "10px"}}>진행중인 투자</h4>
                <CrowdList></CrowdList>
            </C.CrowdWrapper>
        </S.Wrapper>
    )
}

export default CompanyNotice