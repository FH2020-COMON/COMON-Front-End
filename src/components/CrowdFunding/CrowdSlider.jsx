import { useEffect, useRef, useState } from "react"
import * as S from "./styles"
const TOTAL_SLIDES = 3;
function CrowdSlider(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES-1) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
      };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES-1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(()=>{
        slideRef.current.style.transform = `translateX(calc(-${currentSlide}00%/${TOTAL_SLIDES}))`;
    },[currentSlide])
    return(
        <S.SliderContainers>
            <S.SliderWrapper ref={slideRef}>
                <S.SliderItem>
                    <S.SliderImg src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128573116_5388737394473436_3945091867273732641_n.png?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_eui2=AeH8GKy9cxUQyd-Lz07IsIgzEm9RsVRUytISb1GxVFTK0hKktR4p03VTcxvX0Cc9xUUo1Pk9BDCZwdqZ8iO5PeWV&_nc_ohc=NUODaK-HIlwAX88T_jn&_nc_ht=scontent-ssn1-1.xx&oh=591499fda1926bc19c332fd8a5df2303&oe=5FECD857"></S.SliderImg>
                    <S.SliderTitle>
                        <S.SliderText>개발,</S.SliderText>
                        <S.SliderText>내가 게임개발짱임</S.SliderText>
                        <S.SliderDetails>김지민 | 바보</S.SliderDetails>
                    </S.SliderTitle>
                </S.SliderItem>
                <S.SliderItem></S.SliderItem>
                <S.SliderItem></S.SliderItem>
            </S.SliderWrapper>
            <S.SliderButtons>
                <S.SlideArrow onClick={prevSlide}><i className="fas fa-chevron-left"></i></S.SlideArrow>
                <S.SlideArrow onClick={nextSlide}><i className="fas fa-chevron-right"></i></S.SlideArrow>
                <S.SlideState>{currentSlide+1}/{TOTAL_SLIDES}</S.SlideState>
            </S.SliderButtons>
        </S.SliderContainers>
    )
}
export default CrowdSlider