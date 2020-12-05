import * as S from "./styles"
import {Viewer } from "hwp.js"
import { useCallback, useRef } from "react"
function HwpViewr(){
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
    return(
        <S.Modal_Wrapper>
            <div ref={ref}></div>
        </S.Modal_Wrapper>
    )
}
export default HwpViewr;
