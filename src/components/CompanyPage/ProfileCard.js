import React from 'react'
import * as S from './styles'

const ProfileCard = () => {
    return (
        <S.ProfileWrapper>
            <S.ProfileImg src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c15.0.50.50a/p50x50/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7206a8&_nc_ohc=u1uyhcObol0AX8fIvSg&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=effb881e3c63b9ed16f9c3e29f9166f5&oe=5FF0AC0F" />
            <S.Title line="0" fontSize="10px">안은결</S.Title>
            <S.TitleJik fontSize="12px">(따까리)</S.TitleJik>
        </S.ProfileWrapper>
    )
}

export default ProfileCard