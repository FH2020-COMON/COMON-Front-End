import { useDispatch } from "react-redux";
import { ModalState } from "../../../modules/actions/userAction";
import * as S from "./styles" 
function Header(){
    const dispatch = useDispatch();
    function setModal(){
        dispatch(ModalState("Login"));
    }
    return(
        <>
            <S.Header>
                <S.Logo></S.Logo>
                <S.HeaderMenu>
                    <li onClick={setModal}>로그인</li>
                    <li>회원가입</li>
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;