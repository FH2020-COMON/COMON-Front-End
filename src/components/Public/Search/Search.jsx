import { useState } from "react";
import * as S from "./styles"
function Search({state}){
    const [value,setValue]=useState("");
    function changeHandler(e){
        setValue(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <form onSubmit={onSubmit} style={{textAlign:state}}>
            <S.SearchWrapper>
                <S.SearchInput placeholder="검색어를 입력해주세요.." value={value} onChange={changeHandler}></S.SearchInput>
            </S.SearchWrapper>
        </form>
    )
}
export default Search;