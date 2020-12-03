import { useDispatch } from "react-redux";
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
                    <li onClick={()=>setModal("Login")}>로그인</li>
                    <li onClick={()=>setModal("Register")}>회원가입</li>
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;