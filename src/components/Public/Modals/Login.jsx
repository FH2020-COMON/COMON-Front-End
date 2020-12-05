import { useDispatch } from "react-redux";
import { ModalState, setToken } from "../../../modules/actions/userAction";
import { request } from "../../../modules/axios/axios";
import useInputs from "../../../modules/customHooks/useInputs";
import * as S from "./styles"
function Login(){
    const dispatch=useDispatch();
    const [state,onChange]=useInputs({
        email: '',
        password: '',
    })
    const { email, password} = state;
    function Submit(e){
        e.preventDefault();
        if(password!="" && email!="")
        {
            request("post", "/auth", "", state)
            .then((res)=>{
                alert("로그인 성공");
                console.log(res);
                localStorage.setItem("access_token", res);
                dispatch(ModalState(null));
                dispatch(setToken(res));
            })
            .catch((e)=>{
                alert(e);
            })
        }
    }
    return(
        <S.Modal_Wrapper>
            <S.Modal_Logo>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128874843_673210726703686_7370548855430177074_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHDdeXJpq8hNjcQo35vxYzIlvOeP8EHvyOW854_wQe_I5NdcQCZD8bEnWXKQiXyDLHumZVTuE_QL9e5kNQIuDRZ&_nc_ohc=5BhpkbubYHQAX8QjWOw&_nc_ht=scontent-ssn1-1.xx&oh=3b4865bca90ef9609b007ec3ab807afc&oe=5FEF119C"></img>
            </S.Modal_Logo>
            <S.Login_Form onSubmit={Submit}>
                <h4>이메일</h4>
                <input name="email" value={email} onChange={onChange} placeholder="이메일을 입력해주세요" type="text"/>
                <h4>비밀번호</h4>
                <input name="password" value={password} onChange={onChange}placeholder="비밀번호를 입력해주세요" type="password"/>
                <p onClick={()=>dispatch(ModalState("Register"))} style={{textAlign: "end"}}>아직 커몬 계정이 없으신가요?</p>
                <button>커몬 시작하기</button>
            </S.Login_Form>
        </S.Modal_Wrapper>
    );
}
export default Login;