import * as S from "./styles"
function Spectrum(){
    const a=[{},{},{},{},{},{},{},{},{},{},{},{}];
    return(
        <div>
            <S.Spectrum>
                {
                    a.map((i)=>{
                        return(
                            <S.Bar></S.Bar>
                        )
                    })
                }

            </S.Spectrum>
        </div>
    )
}
export default Spectrum;