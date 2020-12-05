import { useDispatch } from "react-redux";
import { ModalState } from "../../../modules/actions/userAction";
import { request } from "../../../modules/axios/axios";
import useInputs from "../../../modules/customHooks/useInputs";
import * as S from "./styles"
function Register(){
    const dispatch=useDispatch();
    const [state,onChange]=useInputs({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })
    const {name,email,password,confirm} = state;
    function Submit(e){
        e.preventDefault();
        if(password==confirm)
        {
            console.log("test");
            const body={
                name : name,
                email : email,
                password: password
            }
            request("post", "/user", "", body)
            .then((res)=>{
                alert("회원가입 성공");
                dispatch(ModalState(null));

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
                <input name="email" onChange={onChange} value={email} placeholder="이메일을 입력해주세요" type="text"/>
                <h4>이름</h4>
                <input name="name" onChange={onChange} value={name} placeholder="이름을 입력해주세요" type="text"/>
                <h4>비밀번호</h4>
                <input name="password" onChange={onChange} value={password} placeholder="비밀번호를 입력해주세요" type="password"/>
                <h4>비밀번호 확인</h4>
                <input name="confirm" onChange={onChange} value={confirm} placeholder="비밀번호를 입력해주세요" type="password"/>
                <button>커몬 시작하기</button>
            </S.Login_Form>
        </S.Modal_Wrapper>
    );
}
export default Register;