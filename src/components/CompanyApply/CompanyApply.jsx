import * as S from "./styles"
import Header from "../Public/Header/Header"
function CompanyApply(){
    return(
        <>
            <Header></Header>
            <S.ApplyContainer>
                <S.ApplyWrapper>
                    <S.DownloadBox>
                       안녕.hwp 
                       <i class="fas fa-file-download"></i>
                    </S.DownloadBox>
                    <S.FileBox>
                        <input type="file"></input>
                        <S.FileState>선택된 파일 없음</S.FileState>
                        <S.FileSelectBT>파일선택</S.FileSelectBT>
                    </S.FileBox>
                    <S.Apply>지원하기</S.Apply>
                </S.ApplyWrapper>
            </S.ApplyContainer>
        </>
    )
}
export default CompanyApply;