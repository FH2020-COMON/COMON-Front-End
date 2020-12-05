import { useDispatch, useSelector } from "react-redux";
import { ModalState } from "../../../modules/actions/userAction";
import CreateCategory from "./CreateCategory";
import HwpViewr from "./HwpViewr";
import Invest from "./Invest";
import Login from "./Login"
import Register from "./Register";
import StartInterview from "./StartInterview";
import CreateElement from "./CreateElement"
import * as S from "./styles"
import SwitchAccount from "./SwitchAccount";
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
                            :state=="StartInterview"?
                                <StartInterview></StartInterview>
                            :state=="SwitchAccount"?
                                <SwitchAccount></SwitchAccount>
                            :state=="Hwp"?
                                <HwpViewr></HwpViewr>
                            :state=="Element"?
                                <CreateElement></CreateElement>
                            :state=="Category"?
                                <CreateCategory></CreateCategory>
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