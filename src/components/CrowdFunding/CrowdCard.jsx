import * as S from "./styles"
import * as C from '../CompanyNotice/styles'
import { useHistory } from "react-router";
function CrowdCard (props){
    const {data} = props
    const history=useHistory();
    function ToLink(id){
        console.log(id);
        history.push("/test");
        if(props.type=="notice"){
            history.push("/companyapply/" + data.apply_id);
        }else{    
            history.push("/crowddetail/" + data.crowd_id);
        }
    }
    return(
        <S.CrowdCard onClick={()=>ToLink("/test")} index={props.index}>
            <S.ImgBox>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"></img>
            </S.ImgBox>
            <S.CrowdDesc>
                {
                    props.type === "crowd" && (
                        <>
                            <S.CardHeader>
                                <div>{data.hash_tag}</div>
                                <b>{data.company_name}</b>
                            </S.CardHeader>
                            <S.CardTitle>{data.crowd_name}</S.CardTitle>
                            <S.CardFooter>
                            <S.CrowdNow>{data.now_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 펀딩</S.CrowdNow>
                                <S.CrowdDday>D-{data.crowd_id}</S.CrowdDday>
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
                                <S.LikeButton><i className="fas fa-heart fa-sm" /> 0</S.LikeButton>
                            </S.CardFooter>
                        </>    
                    )
                }
                
            </S.CrowdDesc>
        </S.CrowdCard>
    )
}
export default CrowdCard;