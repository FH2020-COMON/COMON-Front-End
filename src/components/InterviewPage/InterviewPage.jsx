import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InterviewState } from "../../modules/actions/userAction";
import Interview from "./Interview";
import InterviewVerify from "./InterviewVerify";
import * as S from "./styles"
function InterviewPage(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(InterviewState(0))
    },[])
    const state=useSelector(state => state.user.interview_state);
    return(
        <S.Wrapper>
            {
                state==0?
                    <InterviewVerify></InterviewVerify>
                :state==1?
                    <Interview></Interview>
                :null
            }
        </S.Wrapper>
    )
}
export default InterviewPage;