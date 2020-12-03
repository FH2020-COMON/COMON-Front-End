import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContentTopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1410px;
    margin-top: 80px;
`

export const ContentBottomWrapper = styled.div`
    display: flex;
    height: 600px;
`

export const Title = styled.p`
    color: ${props => props.color || "black"};
    font-size: ${props => props.fontSize || "18px"};
    font-weight: 600;
    margin-bottom: ${props => props.mb || 0};
    margin-left: ${props => props.ml || 0};
`

export const ImgMain = styled.img`
    border-radius: 7px;
    width: 700px;
    height: auto;
    max-height: 510px;
`

export const TempWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    width: ${props => props.width || "600px"};
    ${props => props.justify && css`
        justify-content: space-between;
    `}
`

export const DetailWrapper = styled.div`
    height: 270px; 
    margin-left: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProgressBar = styled.div`
    width: 600px;
    height: 13px;
    display: flex;
    border: 1px solid #7B00FF;
    background: white;
    border-radius: 15px;
`

export const ProgressBarDiv = styled.div`
    background: #7B00FF;
    border-radius: 15px;
    width: ${props => props.width + "%" || 0};
    height: 100%;
    transition: 0.7s width ease-in-out;
`

export const Button = styled.button`
    padding: ${props => props.padding || 0};
    background: ${props => props.bgColor || "white"};
    border: 1px solid ${props => props.borderColor || "black"};
    color: ${props => props.color || "black"};
    font-size: 16px;
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
`

export const InputBox = styled.input`
    border: 1px solid #7B00FF;
    border-radius: 9px;
    width: 100%;
    height: 380px;
`