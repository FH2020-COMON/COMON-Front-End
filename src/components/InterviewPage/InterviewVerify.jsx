import * as S from "./styles"
import { Viewer } from "hwp.js"
import { useCallback, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { InterviewState } from "../../modules/actions/userAction";
function InterviewVerify(){
    const dispatch=useDispatch();
    const ref = useRef(null)
    const showViewer = useCallback((file) => {
        const reader = new FileReader()
    
        reader.onloadend = (result) => {
          const bstr = result.target?.result
    
          if (bstr) {
            try {
              new Viewer(ref.current, bstr)
            } catch (e) {
              console.log(e);
            }
          }
        }
        reader.readAsBinaryString(file);
    }, [])
    function Datahandler(e){
        showViewer(e.target.files[0]);
    }
    return(
        <>
            <input onChange={Datahandler} type="file"></input>
            <S.Title style={{margin: "10px 0"}}>지원서</S.Title>
            <S.Viewer className="test" ref={ref}/>
            <S.CheckLabel>
                <input type="checkbox"></input>
                <p>본임임을 확인하였습니다.</p>
            </S.CheckLabel>
            <S.NextButton onClick={()=>dispatch(InterviewState(1))}>다음</S.NextButton>
        </>
    )
}
export default InterviewVerify;