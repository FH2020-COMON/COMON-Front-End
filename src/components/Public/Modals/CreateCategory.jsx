import * as S from "./styles"
function CreateCategory(){
    const onSubmitCa = (e) => {
        e.preventDefault()
    }

    return(
        <S.Modal_Wrapper>
            <S.Modal_Logo>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128874843_673210726703686_7370548855430177074_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHDdeXJpq8hNjcQo35vxYzIlvOeP8EHvyOW854_wQe_I5NdcQCZD8bEnWXKQiXyDLHumZVTuE_QL9e5kNQIuDRZ&_nc_ohc=5BhpkbubYHQAX8QjWOw&_nc_ht=scontent-ssn1-1.xx&oh=3b4865bca90ef9609b007ec3ab807afc&oe=5FEF119C"></img>
            </S.Modal_Logo>
            <S.Login_Form onSubmit={onSubmitCa}>
                <h4>카테코리명</h4>
                <input placeholder="카테고리명을 입력해주세요" type="text"/>
                <button>카테고리 생성하기</button>
            </S.Login_Form>
        </S.Modal_Wrapper>
    );
}
export default CreateCategory;