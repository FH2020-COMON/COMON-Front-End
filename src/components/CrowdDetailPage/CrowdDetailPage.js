import React, {useEffect, useState, useRef} from 'react'
import * as S from './styles'
import Header from '../Public/Header/Header'

import ProjectImg from '../../assets/projectDetail.png'
import { ModalState } from '../../modules/actions/userAction'
import { useDispatch } from 'react-redux'
import { request } from '../../modules/axios/axios'

const CrowdDetailPage = React.memo((props) => {
    const [percent, setPercent] = useState(0)
    const [count, setCount] = useState(0)
    const [now_amount, setPrice] = useState(0)
    const [destination_amount, setGoalPrice] = useState(0)
    const [loading, setLoading] =useState(false);
    const [data,setData] = useState();
    const cb = useRef()
    const cbP = useRef()
    const cbGP = useRef()
    const inter = useRef()
    const interP = useRef()
    const interGP = useRef()

    const callback = () => {
        setCount(count + 1)
    }
    useEffect(()=>{
        setLoading(true);
        request("get","/crowd/" + props.match.params.id, "", "")
        .then((res)=>{
            setData(res);
            console.log(res);
        })
        setLoading(false);
        
    },[])
    const priceCallback = () => {
        setPrice(Math.round(now_amount + (data.now_amount / 100)))
    }

    const goalpriceCallback = () => {
        setGoalPrice(Math.round(destination_amount + (data.destination_amount / 100)))
    }

    useEffect(() => {
        cb.current = callback
        cbP.current = priceCallback
        cbGP.current = goalpriceCallback
    })

    useEffect(() => {
        
            setTimeout(() => {
                try{
                    setPercent(Math.round((data.now_amount / data.destination_amount) * 100))
                }catch(e){}
            }, 100)
        

    }, [])

    useEffect(() => {
        inter.current = setInterval(() => {cb.current()}, 450 / percent)
    }, [percent])

    useEffect(() => {
        try{
            interP.current = setInterval(() => {cbP.current()}, 450 / data.now_amount)
            interGP.current = setInterval(() => {cbGP.current()}, 450 / data.destination_amount)
        }catch(e){}
    }, [])

    useEffect(() => {
        if(count >= percent) {
            clearInterval(inter.current)
        }
    }, [count])

    useEffect(() => {
        try{
            if(now_amount >= data.now_amount) {
                clearInterval(interP.current)
            }
        }catch(e){}
    }, [now_amount])

    useEffect(() => {
        try{
        if(destination_amount >= data.destination_amount) {
            clearInterval(interGP.current)
        }
        }catch(e){

        }
    }, [destination_amount])

    const countRender = React.useMemo(() => (
        <S.Title fontSize="26px">{now_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.Title>
    ), [now_amount])

    const percentRender = React.useMemo(() => (
        <S.Title>달성률 {count}%</S.Title>
    ), [count])

    const gageRender = React.useMemo(() => (
        <S.ProgressBarDiv width={percent} />
    )   , [percent])
    const dispatch = useDispatch();
    function setModal(state){
        dispatch(ModalState(state));
    }
    if(loading) return (<div>로딩중...</div>)
    if(!data) return (<div>데이터 없음</div>)
    return (
        <>
            <S.Wrapper>
                <Header />
                <S.ContentWrapper>
                    <S.ContentTopWrapper>
                        <S.Title mb="6px" color="rgb(140,140,140)" fontSize="18px">{data.company_name}</S.Title>
                        <S.Title mb="15px" fontSize="31px">{data.crowd_name}</S.Title>
                    </S.ContentTopWrapper>
                    <S.ContentBottomWrapper>
                        <S.ImgMain src="https://scontent.xx.fbcdn.net/v/t1.15752-9/127925082_717831708864362_3306144467799133087_n.png?_nc_cat=100&ccb=2&_nc_sid=58c789&_nc_ohc=__oMOf0RcIgAX8Yyy9-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b02b97f2b6f8cc878eeb733d881a38a8&oe=5FEE0A99" />
                        <S.DetailWrapper>
                            <S.Title mb="30px" color="#7B00FF" fontSize="22px">{data.hash_tag}</S.Title>
                            <S.TempWrapper>{countRender}<S.Title style={{marginLeft: "10px"}} color="rgb(150, 150, 150)" fontSize="20px">펀딩중</S.Title></S.TempWrapper>
                            <S.TempWrapper justify>{percentRender}<S.Title>목표금액 {data.destination_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.Title></S.TempWrapper>
                            <S.ProgressBar>
                                {gageRender}
                            </S.ProgressBar>
                            <S.Title color="rgb(130, 130, 130)" mb="-8px" ml="auto" fontSize="16px">D-20</S.Title>
                            <S.TempWrapper justify>
                                <S.Button onClick={()=>setModal("Invest")} borderColor="#7B00FF" padding="8px 77px" bgColor="#7B00FF" color="white">투자하기</S.Button>
                                <S.TempWrapper width="260px" justify>
                                    <S.Button borderColor="rgb(230, 230, 230)" padding="8px 12px"><i className="far fa-heart"></i> 관심 있어요</S.Button>
                                    <S.Button borderColor="rgb(230, 230, 230)" padding="8px 12px"><i className="far fa-share-square"></i> 공유하기</S.Button>
                                </S.TempWrapper>
                            </S.TempWrapper>
                        </S.DetailWrapper>
                    </S.ContentBottomWrapper>
                </S.ContentWrapper>
            </S.Wrapper>
            <S.BottomHead />
            <S.BottomWrapper>
                <S.ProjectWrapper>
                    <S.ProjectHeader>프로젝트 소개</S.ProjectHeader>
                    <S.ProjectImg src={ProjectImg} />
                    <S.ProjectButton>내용 상세보기</S.ProjectButton>
                </S.ProjectWrapper>
            </S.BottomWrapper>
        </>
    )
})

export default CrowdDetailPage