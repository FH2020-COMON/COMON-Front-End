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
                <Search state="end"></Search>
                <h4 style={{marginBottom: "10px"}}>진행중인 투자</h4>
                <CrowdList></CrowdList>
            </S.CrowdWrapper>
        </>
    )
}
export default CrowdFunding;