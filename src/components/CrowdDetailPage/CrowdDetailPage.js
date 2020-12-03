import React, {useEffect, useState, useRef} from 'react'
import * as S from './styles'
import Header from '../Public/Header/Header'
import data from './dummydata'

import ProjectImg from '../../assets/projectDetail.png'

const CrowdDetailPage = React.memo(() => {
    const [percent, setPercent] = useState(0)
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [goalPrice, setGoalPrice] = useState(0)
    const cb = useRef()
    const cbP = useRef()
    const cbGP = useRef()
    const inter = useRef()
    const interP = useRef()
    const interGP = useRef()

    const callback = () => {
        setCount(count + 1)
    }

    const priceCallback = () => {
        setPrice(Math.round(price + (data.price / 100)))
    }

    const goalPriceCallback = () => {
        setGoalPrice(Math.round(goalPrice + (data.goalPrice / 100)))
    }

    useEffect(() => {
        cb.current = callback
        cbP.current = priceCallback
        cbGP.current = goalPriceCallback
    })

    useEffect(() => {
        setTimeout(() => {
            setPercent(Math.round((data.price / data.goalPrice) * 100))
        }, 100)
    }, [])

    useEffect(() => {
        inter.current = setInterval(() => {cb.current()}, 450 / percent)
    }, [percent])

    useEffect(() => {
        interP.current = setInterval(() => {cbP.current()}, 450 / data.price)
        interGP.current = setInterval(() => {cbGP.current()}, 450 / data.goalPrice)
    }, [])

    useEffect(() => {
        if(count >= percent) {
            clearInterval(inter.current)
        }
    }, [count])

    useEffect(() => {
        if(price >= data.price) {
            clearInterval(interP.current)
        }
    }, [price])

    useEffect(() => {
        if(goalPrice >= data.goalPrice) {
            clearInterval(interGP.current)
        }
    }, [goalPrice])

    const countRender = React.useMemo(() => (
        <S.Title fontSize="26px">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.Title>
    ), [price])

    const percentRender = React.useMemo(() => (
        <S.Title>달성률 {count}%</S.Title>
    ), [count])

    const gageRender = React.useMemo(() => (
        <S.ProgressBarDiv width={percent} />
    )   , [percent])
    
    return (
        <>
            <S.Wrapper>
                <Header />
                <S.ContentWrapper>
                    <S.ContentTopWrapper>
                        <S.Title mb="6px" color="rgb(140,140,140)" fontSize="18px">{data.companyName}</S.Title>
                        <S.Title mb="15px" fontSize="31px">{data.title}</S.Title>
                    </S.ContentTopWrapper>
                    <S.ContentBottomWrapper>
                        <S.ImgMain src="https://scontent.xx.fbcdn.net/v/t1.15752-9/127925082_717831708864362_3306144467799133087_n.png?_nc_cat=100&ccb=2&_nc_sid=58c789&_nc_ohc=__oMOf0RcIgAX8Yyy9-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b02b97f2b6f8cc878eeb733d881a38a8&oe=5FEE0A99" />
                        <S.DetailWrapper>
                            <S.Title mb="30px" color="#7B00FF" fontSize="22px">{data.category}</S.Title>
                            <S.TempWrapper>{countRender}<S.Title style={{marginLeft: "10px"}} color="rgb(150, 150, 150)" fontSize="20px">{data.state}</S.Title></S.TempWrapper>
                            <S.TempWrapper justify>{percentRender}<S.Title>목표금액 {data.goalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</S.Title></S.TempWrapper>
                            <S.ProgressBar>
                                {gageRender}
                            </S.ProgressBar>
                            <S.Title color="rgb(130, 130, 130)" mb="-8px" ml="auto" fontSize="16px">D-20</S.Title>
                            <S.TempWrapper justify>
                                <S.Button borderColor="#7B00FF" padding="8px 77px" bgColor="#7B00FF" color="white">투자하기</S.Button>
                                <S.TempWrapper width="240px" justify>
                                    <S.Button borderColor="rgb(230, 230, 230)" padding="8px 12px">관심 있어요</S.Button>
                                    <S.Button borderColor="rgb(230, 230, 230)" padding="8px 12px">공유하기</S.Button>
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