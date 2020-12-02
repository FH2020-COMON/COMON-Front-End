import * as S from "./styles"
function CrowdCard({data}){
    return(
        <S.CrowdCard>
            <S.ImgBox>
                <img src={data.src}></img>
            </S.ImgBox>
            <S.CrowdDesc>
                <S.CardHeader>
                    <div>{data.keywords}</div>
                    <b>{data.name}</b>
                </S.CardHeader>
                <S.CardTitle>{data.title}</S.CardTitle>
                <S.CardFooter>
                    <S.CrowdNow>{data.now.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 펀딩</S.CrowdNow>
                    <S.CrowdDday>D-{data.Dday}</S.CrowdDday>
                </S.CardFooter>
            </S.CrowdDesc>
        </S.CrowdCard>
    )
}
export default CrowdCard;