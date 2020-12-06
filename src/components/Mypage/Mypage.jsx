import * as S from "./styles"
import Header from "../Public/Header/Header"
import Spectrum from "../Public/Spectrum/Spectrum";
import { useDispatch } from "react-redux";
import { ModalState, setToken } from "../../modules/actions/userAction";
import { useEffect, useState } from "react";
import { request } from "../../modules/axios/axios";
import { Link, useHistory } from "react-router-dom";
function Mypage(){
    const [data,setData]=useState(0)
    const [loading,setLoading]=useState(0)
    const dispatch = useDispatch();
    const history = useHistory()
    function setModal(state){
        dispatch(ModalState(state));
    }
    function Logout(){
        localStorage.clear();
        dispatch(setToken(null));
        alert("로그아웃 되었습니다.")
        history.push("/")
    }
    useEffect(()=>{
        request("get","/user/myPage",{'Authorization' : "Bearer " + localStorage.getItem("access_token")}, "")
        .then((res)=>{
            setData(res);
        })
    },[])
    if(loading) return(<div>로딩중</div>)
    if(!data) return(<div>값이 존재하지않음</div>)
    return(
        <>
            <Header></Header>
            <S.Container>
                <S.Wrapper>
                    <S.Myprofile>
                        <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGpyYFH56Z7v8WWyx38ZAi3LYw35eBBIRQtjDfl4EEhFFohF7QlcUYeZQ46yH82jDyKyjeJTrO10zsHiL-8wt7F&_nc_ohc=u1uyhcObol0AX8fIvSg&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=a2ac5e25d3555b6780fe08f08e31b9ff&oe=5FEE6E73"></img>
                        <S.Mydetails>
                            <S.Myname>{data.name} {data.company_name !== "등록된 회사 없음" && `| ${data.user_type == "APPLICANT" ? "사원" : data.user_type == "OWNER" ? "사장" : "임원"}`}</S.Myname>
                            <S.Mycompany>{data.company_name}</S.Mycompany>
                        </S.Mydetails>
                        <S.SwitchAccount onClick={()=>setModal("SwitchAccount")}>계정전환</S.SwitchAccount>
                    </S.Myprofile>
                    <Spectrum></Spectrum>
                    <S.MyElement><i className="fas fa-flag"></i> 공지사항</S.MyElement>
                    <S.MyElement><Link to="/applylist"><i className="fas fa-clipboard-list"></i> 면접현황</Link></S.MyElement>
                    {
                        data.user_type === "OWNER" && (
                            <>
                                <S.MyElement onClick={()=>setModal("CreateApply")}><i className="fas fa-users"></i> 모집공고</S.MyElement>
                                <S.MyElement onClick={()=>setModal("CreateFunding")}><i className="fas fa-coins"></i> 펀딩시작</S.MyElement>
                            </>
                        )
                    }
                    <S.MyElement><i className="fas fa-phone-alt"></i> 고객센터</S.MyElement>
               
                    <S.Logout onClick={Logout}>로그아웃</S.Logout>
                </S.Wrapper>
            </S.Container>
        </>
    )
}
export default Mypage;