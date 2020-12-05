import ApplyCard from "./ApplyCard"
import * as S from "./styles"
import Header from "../Public/Header/Header"
function ApplyList(){
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
            </S.Wrapper> 
        </>
    )
}
export default ApplyList;