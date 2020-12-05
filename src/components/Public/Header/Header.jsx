import userEvent from "@testing-library/user-event";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { ModalState } from "../../../modules/actions/userAction";
import * as S from "./styles" 
function Header(props){
    const history = useHistory()
    const dispatch = useDispatch();
    const token = useSelector(state=>state.user.token)
    function setModal(state){
        dispatch(ModalState(state));
    }
    return(
        <>
            <S.Header margin={props.margin}>
                <S.Logo onClick={() => history.push("/companynotice")}></S.Logo>
                <S.HeaderMenu>
                    {
                        token!=null?
                            <>
                            <li><Link to="/mypage">MY</Link></li>
                            <li><Link to="/mypage">나의 회사</Link></li>
                            
                            </>
                        :<li onClick={()=>setModal("Login")}>로그인 / 회원가입</li>
                    }
                    
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;