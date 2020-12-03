import React from 'react'
import * as S from './styles'
import Header from '../Public/Header/Header'
import data from './dummydata'

import ProjectImg from '../../assets/projectDetail.png'

const CompanyApplyPage = () => {
    return (
        <>
            <S.Wrapper>
                <Header />
                <S.ContentWrapper>
                    <S.ContentBottomWrapper>
                        <S.ImgMain src="https://scontent.xx.fbcdn.net/v/t1.15752-9/127925082_717831708864362_3306144467799133087_n.png?_nc_cat=100&ccb=2&_nc_sid=58c789&_nc_ohc=__oMOf0RcIgAX8Yyy9-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b02b97f2b6f8cc878eeb733d881a38a8&oe=5FEE0A99" />
                        <S.DetailWrapper>
                            <S.Title mb="15px" color="rgb(165, 165, 165)" fontSize="18px">(주)스타트업최고</S.Title>
                            <S.Title fontSize="32px">프론트엔드 개발자 모집</S.Title>
                            <S.TempWrapper justify><S.Title fontSize="21px">남은 기간</S.Title><S.Title color="rgb(170, 170, 170)" fontSize="17px">D-20</S.Title></S.TempWrapper>
                            <S.TagWrapper>
                                <S.Tag>#회사</S.Tag>
                                <S.Tag>#프론트</S.Tag>
                                <S.Tag>#김지민</S.Tag>
                            </S.TagWrapper>
                            <S.TempWrapper justify>
                                <S.Button borderColor="#7B00FF" padding="8px 77px" bgColor="#7B00FF" color="white">투자하기</S.Button>
                                <S.TempWrapper width="240px" justify>
                                    <S.Button borderColor="rgb(230, 230, 230)" padding="8px 12px">관심 있어요</S.Button>
                                    <S.Button borderColor="rgb(230, 230, 230)" padding="8px 12px">공유하기</S.Button>
                                </S.TempWrapper>
                            </S.TempWrapper>
                        </S.DetailWrapper>
                    </S.ContentBottomWrapper>
                </S.ContentWrapper>
            </S.Wrapper>
            <S.BottomHead />
            <S.BottomWrapper>
                <S.ProjectWrapper>
                    <S.ProjectHeader>프로젝트 소개</S.ProjectHeader>
                    <S.ProjectImg src={ProjectImg} />
                    <S.ProjectButton>내용 상세보기</S.ProjectButton>
                </S.ProjectWrapper>
            </S.BottomWrapper>
        </>
    )
}

export default CompanyApplyPage