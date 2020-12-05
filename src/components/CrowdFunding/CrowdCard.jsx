import * as S from "./styles"
import * as C from '../CompanyNotice/styles'
function CrowdCard (props){
    const {data} = props
    return(
        <S.CrowdCard index={props.index}>
            <S.ImgBox>
                <img src={data.src}></img>
            </S.ImgBox>
            <S.CrowdDesc>
                {
                    props.type === "crowd" && (
                        <>
                            <S.CardHeader>
                                <div>{data.keywords}</div>
                                <b>{data.name}</b>
                            </S.CardHeader>
                            <S.CardTitle>{data.title}</S.CardTitle>
                            <S.CardFooter>
                                <S.CrowdNow>{data.now.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 펀딩</S.CrowdNow>
                                <S.CrowdDday>D-{data.Dday}</S.CrowdDday>
                            </S.CardFooter>
                        </>
                    )
                }
                {
                    
                    props.type === "notice" && (
                        <>
                            <S.CardHeader>
                                <C.Title fontSize="15px">{data.apply_name}</C.Title>
                            </S.CardHeader>
                            <C.Title fontSize="12px" color="rgb(150, 150, 150)">{data.company_name}</C.Title>
                            <S.CardFooter>
                                <C.Title fontSize="16px" color="rgb(110, 110, 110)">{data.dday}</C.Title>
                                <S.LikeButton><i className="fas fa-heart fa-sm" /> 369</S.LikeButton>
                            </S.CardFooter>
                        </>    
                    )
                }
                
            </S.CrowdDesc>
        </S.CrowdCard>
    )
}
export default CrowdCard;