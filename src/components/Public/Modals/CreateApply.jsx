import Axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalState } from "../../../modules/actions/userAction";
import { request } from "../../../modules/axios/axios";
import useInputs from "../../../modules/customHooks/useInputs";
import * as S from "./styles"
function CreateFunding(){
    const [file,setFile]=useState({ name: "선택된 파일 없음"});
    const [file2,setFile2]=useState({ name: "선택된 파일 없음"});
    const dispatch=useDispatch();
    const [value, onChange]=useInputs({
        apply_name: "",
        hash_tag : "",
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        hour : new Date().getHours(),
        minute: new Date().getMinutes(),
    })
    function handler(e){  
        setFile(e.target.files[0]);
    }
    function handler2(e){  
        setFile2(e.target.files[0]);
    }
    function onSubmit(e){
        e.preventDefault();
        let data=new FormData();
        data.append("files", file);
        data.append("files", file2);
        request("post",`/apply`,{'Authorization' : "Bearer " + localStorage.getItem("access_token")}, value)
        .then((res)=>{
            alert("생성되었습니다.")
            dispatch(ModalState(null));
        })
    }
    return(
        <S.Modal_Wrapper>
            <S.Modal_Logo onSubmit={()=>{return false}}>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128874843_673210726703686_7370548855430177074_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHDdeXJpq8hNjcQo35vxYzIlvOeP8EHvyOW854_wQe_I5NdcQCZD8bEnWXKQiXyDLHumZVTuE_QL9e5kNQIuDRZ&_nc_ohc=5BhpkbubYHQAX8QjWOw&_nc_ht=scontent-ssn1-1.xx&oh=3b4865bca90ef9609b007ec3ab807afc&oe=5FEF119C"></img>
            </S.Modal_Logo>
            <S.Login_Form>
                <h4>제목</h4>
                <input name="apply_name" value={value.apply_name} onChange={onChange} placeholder="모집 타이틀을 입력하세요" type="text"/>
                <h4>해시태그</h4>
                <input name="hash_tag" value={value.hash_tag} onChange={onChange} placeholder="태그를 설정해주세요" type="text"/>
                <input onChange={handler} type="file"/>
                <input onChange={handler2} type="file"/>
                <button onClick={onSubmit}>공고 생성하기</button>
            </S.Login_Form>
        </S.Modal_Wrapper>
    );
}
export default CreateFunding;