import styled from 'styled-components';
const main_color = "#7B00FF";

export const CrowdWrapper= styled.div`
    margin: 0 3.5rem;
`
export const CrowdList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ImgBox = styled.div`
    width: 100%;
`;
export const CrowdCard = styled.div`
    width: 330px;
    height: 291px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #eee;
    margin: 10px 0;
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
`