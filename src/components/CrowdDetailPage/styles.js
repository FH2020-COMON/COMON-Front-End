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

export const BottomWrapper = styled.div`
    width: 100%;
    display: flex;
    background: #F4F4F4;
    padding: 20px 0;
    justify-content: center;
`

export const BottomHead = styled.div`   
    width: 100%;
    height: 35px;
    border: 1px solid #707070;
`

export const ProjectWrapper = styled.div`
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1300px;
`

export const ProjectHeader = styled.p`
    width: 200px;
    padding: 8px 20px;
    border-top-left-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    background: #7B00FF;
    align-self: flex-start;
    margin-bottom: 40px;
`

export const ProjectImg = styled.img`
    width: calc(100% - 160px);
    margin: 0 80px;
    height: auto;
`

export const ProjectButton = styled.button`
    border: 1px solid #7B00FF;
    border-radius: 10px;
    color: #7B00FF;
    font-size: 24px;
    font-weight: 600;
    width: calc(100% - 100px);
    margin: 50px 50px 20px;
    background: white;
    padding: 10px;
    outline: none;
    cursor: pointer;
`