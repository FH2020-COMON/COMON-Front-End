import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ModalState } from "../../../modules/actions/userAction";
import * as S from "./styles" 
function Header(){
    const dispatch = useDispatch();
    function setModal(state){
        dispatch(ModalState(state));
    }
    return(
        <>
            <S.Header>
                <S.Logo></S.Logo>
                <S.HeaderMenu>
                    <li><Link to="/companynotice">모집</Link></li>
                    <li><Link to="/crowdfunding">펀딩</Link></li>
                    <li onClick={()=>setModal("Login")}>로그인</li>
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;