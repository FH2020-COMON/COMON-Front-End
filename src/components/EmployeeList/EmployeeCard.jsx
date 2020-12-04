import Spectrum from "../Public/Spectrum/Spectrum"
import * as S from "./styles"
function EmployeeCard(){
    return(
        <S.Card>
            <S.Profile>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGpyYFH56Z7v8WWyx38ZAi3LYw35eBBIRQtjDfl4EEhFFohF7QlcUYeZQ46yH82jDyKyjeJTrO10zsHiL-8wt7F&_nc_ohc=u1uyhcObol0AX8fIvSg&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=a2ac5e25d3555b6780fe08f08e31b9ff&oe=5FEE6E73"></img>
                <S.ProfileDetails>
                    <S.Name>안은결 | 사장</S.Name>
                    <S.Email>eungyeole@naver.com</S.Email>
                    <Spectrum></Spectrum>
                </S.ProfileDetails>
            </S.Profile>
        </S.Card>
    )
}
export default EmployeeCard;