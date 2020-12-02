import { useState } from "react";
import * as S from "./styles"
function Search({state}){
    const [value,setValue]=useState("");
    function changeHandler(e){
        setValue(e.target.value);
    }
    return(
        <div style={{textAlign:state}}>
            <S.SearchWrapper>
                <S.SearchInput placeholder="검색어를 입력해주세요.." value={value} onChange={changeHandler}></S.SearchInput>
            </S.SearchWrapper>
        </div>
    )
}
export default Search;