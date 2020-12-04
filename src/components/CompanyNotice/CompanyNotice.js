import React from 'react'
import * as S from './styles'
import * as C from '../CrowdFunding/styles'
import Search from '../Public/Search/Search.jsx'
import CrowdList from '../CrowdFunding/CrowdList'
import Header from '../Public/Header/Header'
import CompanyCard from './CompanyCard'

const data = [
    {

    },
    {

    },
    {

    },
    {

    }
]

const CompanyNotice = () => {
    return (
        <S.Wrapper>
            <Header />
            <S.RankWrapper>
                <S.TempWrapper>
                    <S.Title color="#7B00FF" fontSize="21px">BEST</S.Title>
                    <S.Title fontSize="18px" ml="6px">커몬</S.Title>
                </S.TempWrapper>
                <S.RankContentWrapper>
                    {
                        data.map((val, i) => (
                            <CompanyCard key={i} index={i} />
                        ))
                    }
                </S.RankContentWrapper>
            </S.RankWrapper>
            <C.CrowdWrapper>
                <Search state="end"></Search>
                <h3 style={{marginBottom: "10px"}}>모집중인 회사</h3>
                <CrowdList type="notice" />
            </C.CrowdWrapper>
        </S.Wrapper>
    )
}

export default CompanyNotice