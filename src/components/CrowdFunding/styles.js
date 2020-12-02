import styled from 'styled-components';
const main_color = "#7B00FF";

export const CrowdList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 3.5rem;
`

export const ImgBox = styled.div`
    width: 100%;
`;
export const CrowdCard = styled.div`
    width: 330px;
    height: 291px;
    font-weight: bold;
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