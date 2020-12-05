import ApplyCard from "./ApplyCard"
import * as S from "./styles"
import Header from "../Public/Header/Header"
import Axios from "axios";
import { useEffect, useState } from "react";
function ApplyList(){
    const [loading, setLoading] =useState(false);
    const [data,setData] = useState(null);
    useEffect(()=>{
        setLoading(true);
        const url="http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/recruiting/list/user"
        Axios.get(url, {
            headers: {
                'Authorization' : "Bearer " + localStorage.getItem("access_token"),
            }
        })
        .then((res)=>{
            setData(res);
            alert(res);
        })
        setLoading(false);
        
    },[])
    if(loading) return (<div>로딩중...</div>)
    if(!data) return (<div>데이터 없음</div>)
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                {
                    data.map((i, index)=>{
                        <ApplyCard key={index}></ApplyCard>
                    })
                }
            </S.Wrapper> 
        </>
    )
}
export default ApplyList;