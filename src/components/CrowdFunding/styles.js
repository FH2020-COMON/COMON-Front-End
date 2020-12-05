import styled, { keyframes } from 'styled-components';
const main_color = "#7B00FF";

const FadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const CrowdWrapper= styled.div`
    padding: 0 250px;
`
export const CrowdList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ImgBox = styled.div`
    width: 100%;
`;
export const CrowdCard = styled.div`
    max-width: 300px;
    height: 291px;
    & img{
        width: 100%;
    }
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #eee;
    margin: 10px 0;

    @media only screen and (min-width: 910px) and (max-width: 1219px) {
        &:nth-child(2n + 2) {
            margin-left: calc((100% - (300px * 2)) / 1);
        }
    }

    @media only screen and (min-width: 1220px) and (max-width: 1559px) {
        &:nth-child(3n + 2) {
            margin-left: calc((100% - (300px * 3)) / 2);
        }
        &:nth-child(3n + 3) {
            margin-left: calc((100% - (300px * 3)) / 2);
        }
    }

    @media only screen and (min-width: 1560px) {
        &:nth-child(4n + 2) {
            margin-left: calc((100% - (300px * 4)) / 3);
        }
        &:nth-child(4n + 3) {
            margin-left: calc((100% - (300px * 4)) / 3);
        }
        &:nth-child(4n + 4) {
            margin-left: calc((100% - (300px * 4)) / 3);
        }
    }
    opacity: 0;
    transform: translateX(-20px);
    animation-name: ${FadeIn};
    animation-duration: 0.75s;
    animation-delay: ${props => props.index / 10 || 0}s;
    animation-fill-mode: forwards;
`   
export const CrowdDesc = styled.div`
    width: 100%;
    height: calc( 100% - 200px );
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CardHeader = styled.div`
    display: flex;
    font-size: 13px;
    & b{
        margin-left: 5px;
        color:#646464;
    }
`
export const CardTitle= styled.div`
    font-size:13px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
`
export const CrowdNow= styled.div`
    color: ${main_color};
`
export const CrowdDday=styled.div`
    color: #646464;
`
export const SliderContainers=styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`
export const SliderWrapper=styled.div`
    width: 300%;
    display: flex;
    position: relative;
    transition: 1s;
    transform: translateX(calc(-100%/3));
`
export const SliderItem=styled.div`
    width: 100%;
    background: #585C65;
    height: 330px;
`
export const SliderImg=styled.img`
    width: 100%;
    height: 100%;
    position: relative;
`
export const SliderTitle=styled.div`
    color: white;
    position: absolute;
    top: 80px;
    left: 130px;
`
export const SliderText=styled.h1`
    font-size: 30px;
`
export const SliderDetails=styled.h4`
    font-size: 16px;
    margin-top: 20px;
`
export const SliderButtons=styled.div`
    display: flex;
    bottom: 80px;
    align-items: center;
    position: absolute;
    left: 130px;
`
export const SlideState=styled.div`
    background: white;
    color: #7B00FF;
    width: 65px;
    text-align: center;
    font-weight: bold;
    padding: 3px 0;
    font-size: 18px;
    border-radius: 30px;
`
export const SlideArrow=styled.div`
    color: white;
    cursor: pointer;
    font-size: 18px;
    padding-right: 15px;
`

export const LikeButton = styled.button`
    padding: 3px 7px;
    background: #7B00FF;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
` 