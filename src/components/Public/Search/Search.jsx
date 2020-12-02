import { useState } from "react";

function Search(){
    const [value,setValue]=useState("");
    function changeHandler(e){
        setValue(e.target.value);
    }
    return(
        <div>
            <input value={value} onChange={changeHandler}></input>
        </div>
    )
}
export default Search;