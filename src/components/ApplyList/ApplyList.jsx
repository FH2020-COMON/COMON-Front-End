import ApplyCard from "./ApplyCard"
import * as S from "./styles"
import Header from "../Public/Header/Header"
import Axios from "axios";
import { useEffect, useState } from "react";
function ApplyList(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        const url="http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/recruiting/list/company"
        Axios.get(url, {
            headers: {
                'Authorization' : "Bearer " + localStorage.getItem("access_token"),
            }
        })
        .then((res)=>{
            setData(res);
            console.log(res);
        })
    },[])
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                {
                    data !== null && Array.isArray(data) && data.map((i)=>{
                        <ApplyCard key={i}></ApplyCard>
                    })
                }
            </S.Wrapper> 
        </>
    )
}
export default ApplyList;