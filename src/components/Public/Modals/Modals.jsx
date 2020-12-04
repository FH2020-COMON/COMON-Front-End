import { useDispatch, useSelector } from "react-redux";
import { ModalState } from "../../../modules/actions/userAction";
import Invest from "./Invest";
import Login from "./Login"
import Register from "./Register";
import StartInterview from "./StartInterview";
import * as S from "./styles"
function Modals(){
    const state=useSelector(state => state.user.modal_state);
    const dispatch=useDispatch();
    return(
        <>
            {
                state ? 
                    <S.Modal_Container>
                        {
                            state == "Login"?
                                <Login></Login>
                            :state=="Register"?
                                <Register></Register>
                            :state=="Invest"?
                                <Invest></Invest>
                            :state="StartInterview"?
                                <StartInterview></StartInterview>
                            :null
                        }
                        <S.Modal_overlay onClick={()=>dispatch(ModalState(""))}></S.Modal_overlay>
                    </S.Modal_Container>
                :null
            }
        </>
    )
}
export default Modals;