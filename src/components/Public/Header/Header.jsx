import * as S from "./styles" 
function Header(){
    return(
        <>
            <S.Header>
                <S.Logo></S.Logo>
                <S.HeaderMenu>
                    <li>로그인</li>
                    <li>회원가입</li>
                </S.HeaderMenu>
            </S.Header>
        </>
    )
}
export default Header;