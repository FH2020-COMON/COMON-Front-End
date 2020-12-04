import React from 'react'
import * as S from './styles'

const CompanyCard = (props) => {
    return(
        <S.CompanyCardWrapper>
            <S.CompanyCard imgPath="https://scontent.xx.fbcdn.net/v/t1.15752-9/127925082_717831708864362_3306144467799133087_n.png?_nc_cat=100&ccb=2&_nc_sid=58c789&_nc_ohc=__oMOf0RcIgAX8Yyy9-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b02b97f2b6f8cc878eeb733d881a38a8&oe=5FEE0A99" />
            <S.CompanyHead>BEST {props.index+1}</S.CompanyHead>
            <S.Title fontSize="14px" color="rgb(160, 160, 160)">(주)스타트업최고</S.Title>
            <S.Title fontSize="18px">프론트엔드 개발자 모집</S.Title>
        </S.CompanyCardWrapper>
    )
}

export default CompanyCard