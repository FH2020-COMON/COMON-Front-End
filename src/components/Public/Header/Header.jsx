import { useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { ModalState } from "../../../modules/actions/userAction";
import * as S from "./styles" 
function Header(){
    const history = useHistory()
    const dispatch = useDispatch();
    function setModal(state){
        dispatch(ModalState(state));
    }
    return(
        <>
            <S.Header>
                <S.Logo onClick={() => history.push("/")}></S.Logo>
                <S.HeaderMenu>
                    <li><Link to="/companynotice">모집</Link></li>
                    <li><Link to="/crowdfunding">펀딩</Link></li>
                    <li onClick={()=>setModal("Login")}>로그인</li>
                    <li onClick={()=>setModal("Element")}>로그인</li>
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;