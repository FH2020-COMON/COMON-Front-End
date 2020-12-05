import { useState } from "react";
import useInputs from "../../../modules/customHooks/useInputs";
import * as S from "./styles"
function CreateFunding(){
    const [file,setFile]=useState({ name: "선택된 파일 없음"});
    const [value, onChange]=useInputs({
        crowdTitle: "",
        destinationAmount : ""
    })
    function handler(e){  
        setFile(e.target.files[0]);
    }
    function onSubmit(e){
        e.preventDefault();
        let data=new FormData();
        data.append("file", file);
        const body={...value, data}
        console.log(body);
    }
    return(
        <S.Modal_Wrapper>
            <S.Modal_Logo onSubmit={()=>{return false}}>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128874843_673210726703686_7370548855430177074_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHDdeXJpq8hNjcQo35vxYzIlvOeP8EHvyOW854_wQe_I5NdcQCZD8bEnWXKQiXyDLHumZVTuE_QL9e5kNQIuDRZ&_nc_ohc=5BhpkbubYHQAX8QjWOw&_nc_ht=scontent-ssn1-1.xx&oh=3b4865bca90ef9609b007ec3ab807afc&oe=5FEF119C"></img>
            </S.Modal_Logo>
            <S.Login_Form>
                <h4>제목</h4>
                <input name="crowdTitle" value={value.crowdTitle} onChange={onChange} placeholder="펀딩 타이틀을 입력하세요" type="text"/>
                <h4>목표금액</h4>
                <input name="destinationAmount" value={value.destinationAmount} onChange={onChange} placeholder="목표금액을 설정해주세요" type="text"/>
                <input onChange={handler} type="file"/>
                
                <button onClick={onSubmit}>펀딩 생성하기</button>
            </S.Login_Form>
        </S.Modal_Wrapper>
    );
}
export default CreateFunding;