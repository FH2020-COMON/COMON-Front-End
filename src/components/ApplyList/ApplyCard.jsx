import * as S from "./styles"
function ApplyCard(props){
    return(
        <S.Card>
            <S.CompanyDetails>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/cp0/128867999_202604808055568_9052649951003237383_n.png?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGbcFns2wiyW9Eyvdqfz2RCP7uX00kjYtM_u5fTSSNi08o_G0fhCNOCvKfNvp7wN2pHBk7_xYd9Mnjb46B3FBu0&_nc_ohc=lwzcFghrpPQAX-woo6Q&_nc_ht=scontent-ssn1-1.xx&_nc_tp=30&oh=a6ff0ec4a65d9e153fd009774d277644&oe=5FEEB5A7"></img>
                <S.Details>
                    <S.Name>(주)재밌다 <S.State>서류접수</S.State></S.Name>
                    <S.Date>면접일자 : 2020/12/5 7시</S.Date>
                </S.Details>
            </S.CompanyDetails>
            <S.InterViewBT>면접하기</S.InterViewBT>
        </S.Card>
    )
}
export default ApplyCard;