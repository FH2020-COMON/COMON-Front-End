import * as S from "./styles"
function CrowdSlider(){
    return(
        <S.SliderContainers>
            <S.SliderWrapper>
                <S.SliderItem>
                    <S.SliderImg src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128573116_5388737394473436_3945091867273732641_n.png?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_eui2=AeH8GKy9cxUQyd-Lz07IsIgzEm9RsVRUytISb1GxVFTK0hKktR4p03VTcxvX0Cc9xUUo1Pk9BDCZwdqZ8iO5PeWV&_nc_ohc=NUODaK-HIlwAX88T_jn&_nc_ht=scontent-ssn1-1.xx&oh=591499fda1926bc19c332fd8a5df2303&oe=5FECD857"></S.SliderImg>
                    <S.SliderTitle>
                        <S.SliderText>개발,</S.SliderText>
                        <S.SliderText>내가 게임개발짱임</S.SliderText>
                        <S.SliderDetails>김지민 | 바보</S.SliderDetails>
                        <S.SliderButtons>
                            <div></div>
                            <div></div>
                            <div></div>
                        </S.SliderButtons>
                    </S.SliderTitle>
                </S.SliderItem>
                <S.SliderItem></S.SliderItem>
                <S.SliderItem></S.SliderItem>
            </S.SliderWrapper>
        </S.SliderContainers>
    )
}
export default CrowdSlider