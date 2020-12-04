import * as S from "./styles"
import Header from "../Public/Header/Header"
import EmployeeCard from "./EmployeeCard"
function EmployeeList(){
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                <EmployeeCard></EmployeeCard>
                <EmployeeCard></EmployeeCard>
            </S.Wrapper>

        </>
    )
}
export default EmployeeList