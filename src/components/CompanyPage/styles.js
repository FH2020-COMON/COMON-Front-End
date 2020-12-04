import styled, { keyframes, css } from 'styled-components'

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
    border-bottom: 2px solid #7B00FF;
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
    line-height: ${props => props.line || "65px"};
    padding: ${props => props.padding || 0};
    width: ${props => props.width || "auto"};
    transition: all 0.5s linear;
    ${props => props.trans && css`
        transform: translateY(2px);
    `}

    border-top-right-radius: 30px;
`

export const ArrowIcon = styled.i`
    transition: transform 0.2s linear;
    ${props => props.rotate === true && css`
        transform: rotate(90deg);
    `}
`

export const ContentBodyWrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 65px);
`

export const ContentBodyLeft = styled.div`
    width: 280px;
    height: 100%;
    background: rgb(252, 252, 252);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
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

export const NotionButton = styled.button`
    display: flex;
    width: calc(100% - 72px);
    height: 36px;
    margin: 16px 36px 6px;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    white-space: nowrap;
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

let ListOutAnimation

window.onload = () => {
    setTimeout(() => {
        ListOutAnimation = keyframes`
        0% {
            transform: scale(1);
            transform: translateY(0);
            opacity: 1;
        }
    
        35% {
            transform: scale(1.1);
        }
    
        100% {
            transform: scale(0.7);
            transform: translateY(20px);
            opacity: 0;
        }
    `
    }, 0)
}

export const ItemWrapper = styled.div`
    height: 36px;
    margin: 16px 36px 6px 80px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    
    transform: scale(0.7);
    transform: translateY(20px);
    opacity: 0;

    display: ${props => props.type === "in" && "flex"};

    ${props => props.type === "out" && css`
        transition: height 0.0001s 0.55s, margin 0.0001s 0.55s;
        margin: 0;
        height: 0;
    `}

    animation-name: ${props => props.type === "in" ? ListAnimation : props.type === "out" ? ListOutAnimation : "asd"};
    animation-duration: 0.6s;
    animation-delay: ${props => props.type === "in" ? props.index / 30 || 0 : 0}s;
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