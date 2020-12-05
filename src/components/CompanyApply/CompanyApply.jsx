import * as S from "./styles"
import Header from "../Public/Header/Header"
import { useCallback, useRef, useState } from "react";
import { Viewer } from "hwp.js";
import { request } from "../../modules/axios/axios";
import Axios from "axios";
import { useHistory } from "react-router";
function CompanyApply(){
    const history = useHistory();
    const [file,setFile]=useState({ name: "선택된 파일 없음"});
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
    function handler(e){  
        setFile(e.target.files[0]);
        showViewer(e.target.files[0]);
    }
    function submit(){
        if(file.name!="선택된 파일 없음"){
            const data=new FormData();
            data.append("companyid", "0");
            data.append("file", file);
            console.log(data);
            const url="http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/recruiting/apply"
            Axios.post(url, data, {
                headers: {
                    'Authorization' : "Bearer " + localStorage.getItem("access_token"),
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res)=>{
                console.log(res);
                alert("지원신청이 완료되었습니다.")
                history.push("/companynotice");
            })
            .catch((e)=>{
                console.log(e);
            })
        }
    }
    return(
        <>
            <Header></Header>
            <S.ApplyContainer>
                <S.ApplyWrapper>
                    <div style={{height: "73%"}} ref={ref}></div>
                    <S.DownloadBox>
                       안녕.hwp 
                       <i class="fas fa-file-download"></i>
                    </S.DownloadBox>
                    <S.FileBox>
                        <input accept=".hwp" onChange={handler} name="hwp" type="file"></input>
                        <S.FileState>{file.name}</S.FileState>
                        <S.FileSelectBT>파일선택</S.FileSelectBT>
                    </S.FileBox>
                    <S.Apply onClick={submit}>지원하기</S.Apply>
                </S.ApplyWrapper>
            </S.ApplyContainer>
        </>
    )
}
export default CompanyApply;