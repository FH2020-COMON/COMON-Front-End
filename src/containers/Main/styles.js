import styled from 'styled-components'
import BackImg from '../../assets/mainBg.png'

export const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackImg});
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    display: flex;
    flex-direction: column;
    white-space: nowrap;
`

export const ContentWrapper = styled.div`
    margin-top: 135px;
    margin-left: 165px;
    display: flex;
    flex-direction: column;
`

export const HeadContent = styled.p`
    font-size: 56px;
    color: white;
    font-weight: 600;
`

export const Content = styled.span`
    font-size: 22px;
    color: ${props => props.color || "white"};
`

export const ContentBox = styled.p`
    margin-right: auto;
    font-size: 22px;
    color: #7B00FF;
    padding: 4px 10px;
    border-radius: 4px;
    background: white;
    margin-bottom: 13px;
`

export const StartButton = styled.button`
    background: white;
    font-size: 23px;
    color: #7B00FF;
    font-weight: 600;
    border-radius: 14px;
    box-shadow: 0 4px 0 rgba(255, 255, 255, 0.6);
    cursor: pointer;
    margin-right: auto;
    padding: 18px 40px;
    outline: none;
    border: none;
    margin-top: 60px;
    transition: 0.3s all linear;   
    
    &:hover {
        background: rgb(236, 236, 236);
    }

    &:active {
        transition: 0.07s all linear;   
        background: rgb(210, 210, 210);
        box-shadow: none;
        transform: translateY(4px);
    }
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 30px;
`

export const HeaderButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    & a{
        color: white;
    }
`

export const HeaderButton = styled.button`
    background: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    font-size: 17px;
    outline: none;
    transition: 0.1s text-shadow linear, 0.08s color linear;
    cursor: pointer;
    &:hover {
        color: rgb(205, 205, 205);
        text-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
    }

    &:active {
        transition: 0.1s all linear;
        text-shadow: none;
    }
`

export const HeaderLogo = styled.img`

`