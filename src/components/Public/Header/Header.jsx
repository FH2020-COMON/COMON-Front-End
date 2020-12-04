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
                    <li><Link to="/asd">모집</Link></li>
                    <li>펀딩</li>
                    <li onClick={()=>setModal("Login")}>로그인</li>
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;