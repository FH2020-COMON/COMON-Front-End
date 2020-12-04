import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
`

export const ContentHeader = styled.div`
    width: 100%;
    height: 65px;
    border-top: 1px solid #7B00FF;
    border-bottom: 1px solid #7B00FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.p`
    color: ${props => props.color || "black"};
    font-size: ${props => props.fontSize || "18px"};
    font-weight: 600;
    margin-bottom: ${props => props.mb || 0};
    margin-left: ${props => props.ml || 0};
    background: ${props => props.bgColor || "none"};
    line-height: 65px;
    padding: ${props => props.padding || 0};
    width: ${props => props.width || "auto"};
`

export const ContentBodyWrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 65px);
`

export const ContentBodyLeft = styled.div`
    width: 280px;
    height: 100%;
    border-right: 2px solid #7B00FF;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: #7B00FF;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`

export const ContentBodyRight = styled.div`
    width: calc(100% - 280px);
    height: 100%;
`

export const ListWrapper = styled.div`
    width: 300px;
    height: 400px;
    position: absolute;
    right: 10px;
    top: 130px;
    background: yellow;
    border-radius: 3px;
`

// Item styled
const ListAnimation = keyframes`
    0% {
        transform: scale(0.7);
        transform: translateY(20px);
        opacity: 0;
    }

    65% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
        transform: translateY(0);
        opacity: 1;
    }
`

export const ItemWrapper = styled.div`
    height: 36px;
    margin: 16px 20px 6px;
    border-radius: 6px;
    background: rgb(245 , 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    transform: scale(0.7);
    transform: translateY(20px);
    opacity: 0;

    animation-name: ${ListAnimation};
    animation-duration: 0.6s;
    animation-delay: ${props => props.index / 30 || 0}s;
    animation-fill-mode: forwards;
`

// markdown view
export const ViewWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const ListButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin-right: 13px;
    border: none;
    background: rgba(0, 0, 0, 0);
    outline: none;
    cursor: pointer;
`