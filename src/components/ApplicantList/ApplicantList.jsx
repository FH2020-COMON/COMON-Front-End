import ApplicantCard from "./ApplicantCard"
import * as S from "./styles"
import Header from "../Public/Header/Header"
function ApplicantList(){
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                <ApplicantCard></ApplicantCard>
            </S.Wrapper>
        </>
    )
}
export default ApplicantList;