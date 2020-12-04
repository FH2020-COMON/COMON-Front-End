import styled, {css, keyframes} from 'styled-components'

const slideAnimation = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;  
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    width: 100%;
`

export const RankWrapper = styled.div`
    width: 100%;
    height: 430px;
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    padding: 45px 110px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

export const RankContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 60px 0;
`

export const Title = styled.p`
    color: ${props => props.color || "black"};
    font-size: ${props => props.fontSize || "18px"};
    font-weight: 600;
    margin-bottom: ${props => props.mb || 0};
    margin-left: ${props => props.ml || 0};
`

export const TempWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: ${props => props.width || "600px"};
    ${props => props.justify && css`
        justify-content: space-between;
    `}
`

export const CompanyCardWrapper = styled.div`
    width: 240px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;

    transform: translateY(20px);
    opacity: 0;  

    animation-name: ${slideAnimation};
    animation-duration: 0.75s;
    animation-delay: ${props => props.index / 10 || 0}s;
    animation-fill-mode: forwards;
`

export const CompanyHead = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid #7B00FF;
    border-radius: 30px;
    color: #7B00FF;
    font-size: 18px;
    font-weight: 600;
    padding: 5px 12px;
    background: white; 
`   

export const CompanyCard = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-image: url(${props => props.imgPath || "none"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-bottom: 10px;
`