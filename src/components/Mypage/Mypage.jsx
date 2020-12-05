import * as S from "./styles"
import Header from "../Public/Header/Header"
import Spectrum from "../Public/Spectrum/Spectrum";
import { useDispatch } from "react-redux";
import { ModalState, setToken } from "../../modules/actions/userAction";
import { useEffect } from "react";
import { request } from "../../modules/axios/axios";
function Mypage(){
    const dispatch = useDispatch();
    function setModal(){
        dispatch(ModalState("SwitchAccount"));
    }
    function Logout(){
        localStorage.clear();
        dispatch(setToken(null));
        alert("로그아웃 되었습니다.")
    }
    useEffect(()=>{
        request("get","/user/myPage",{'Authorization' : "Bearer " + localStorage.getItem("access_token")}, "")
        .then((res)=>{
            console.log(res);
        })
    },[])
    return(
        <>
            <Header></Header>
            <S.Container>
                <S.Wrapper>
                    <S.Myprofile>
                        <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGpyYFH56Z7v8WWyx38ZAi3LYw35eBBIRQtjDfl4EEhFFohF7QlcUYeZQ46yH82jDyKyjeJTrO10zsHiL-8wt7F&_nc_ohc=u1uyhcObol0AX8fIvSg&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=a2ac5e25d3555b6780fe08f08e31b9ff&oe=5FEE6E73"></img>
                        <S.Mydetails>
                            <S.Myname>안은결 | 사장</S.Myname>
                            <S.Mycompany>(주) 재밌다.</S.Mycompany>
                        </S.Mydetails>
                        <S.SwitchAccount onClick={setModal}>계정전환</S.SwitchAccount>
                    </S.Myprofile>
                    <Spectrum></Spectrum>
                    <S.MyElement><i className="fas fa-flag"></i> 공지사항</S.MyElement>
                    <S.MyElement><i className="fas fa-clipboard-list"></i> 면접현황</S.MyElement>
                    <S.MyElement><i className="fas fa-exclamation-circle"></i> 버전정보</S.MyElement>
                    <S.MyElement><i className="fas fa-phone-alt"></i> 고객센터</S.MyElement>
               
                    <S.Logout onClick={Logout}>로그아웃</S.Logout>
                </S.Wrapper>
            </S.Container>
        </>
    )
}
export default Mypage;