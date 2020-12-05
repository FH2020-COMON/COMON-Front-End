import CrowdList from "./CrowdList"
import Header from "../Public/Header/Header"
import Search from "../Public/Search/Search";
import Slider from "./CrowdSlider"
import * as S from "./styles"
function CrowdFunding(){
    return(
        <>
            <Header></Header>
            <Slider></Slider>
            <S.CrowdWrapper>
                <h3 style={{margin: "10px 0"}}>진행중인 투자</h3>
                <CrowdList type="crowd"></CrowdList>
            </S.CrowdWrapper>
        </>
    )
}
export default CrowdFunding;