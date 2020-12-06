import ApplyCard from "./ApplyCard"
import * as S from "./styles"
import Header from "../Public/Header/Header"
import Axios from "axios";
import { useEffect, useState } from "react";
function ApplyList(){
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        const url="http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/recruiting/list/company"
        Axios.get(url, {
            headers: {
                'Authorization' : "Bearer " + localStorage.getItem("access_token"),
            }
        })
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
        
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중</div>)
    if(!data) return(<div>데이터없음</div>)
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                {
                    data.map((i)=>{
                        return(<ApplyCard data={i}></ApplyCard>)
                    })
                }
            </S.Wrapper> 
        </>
    )
}
export default ApplyList;