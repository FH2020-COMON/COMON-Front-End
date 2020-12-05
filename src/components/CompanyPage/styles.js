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

    ${props => props.other === true ? css`
        margin-right: auto;
    ` : props.other === false && css`
        margin-left: auto;
    `}

    ${props => props.justify && css`
        display: flex;
        justify-content: space-between;
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

const ListWrapperAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
        display: block;
    }
`

const ListWrapperOutAnimation = keyframes`
    from {
        opacity: 1;
    }

    to {
        opaciry: 0;
        display: none;
    }
`

export const ListWrapper = styled.div`
    width: 320px;
    max-height: 430px;
    position: absolute;
    right: 10px;
    top: 130px;
    background: white;
    border-radius: 3px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
    opacity: 0;

    display: flex;
    flex-wrap: wrap;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    animation-name: ${props => props.type === "in" ? ListWrapperAnimation : props.type === "out" ? ListWrapperOutAnimation : "asd"};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
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
    justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
`

export const PhoneButton = styled.button`
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


export const CategoryButton = styled.button`
    color: ${props => props.color || "black"};
    background: ${props => props.bgColor || "rgba(0, 0, 0, 0)"};
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 16px;
    transition: all 0.2s linear;

    &:hover {
        text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transition-duration: 0.05s;
        text-shadow: none;
    }
`

export const Line = styled.hr`
    width: 100%;
    height: 1px;
    background: black;
    margin-right: 20px;
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

const ListOutAnimation = keyframes`
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

    display: ${props => props.type === "in" ? "flex" : props.type === "out" ? "flex" : "none"};

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

//chatView
export const ChatWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ChatItem = styled.span`
    padding: 5px 17px;
    font-size: 18px;
    font-weight: 600;
    background: rgb(230,230, 230);
    ${props => props.other === true ? css`
        margin-right: auto;
        margin-left: 30px;
    ` : props.other === false && css`
        margin-right: 30px;
        margin-left: auto;
    `}
`

export const ChatItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

export const ChatBottomWrapper = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    background: rgba(0, 0, 0, 0);
    transform: translateY(-10px);
`

export const ChatInput = styled.input`
    background: rgb(240, 240, 240);
    border-radius: 10px;
    width: 100%;
    margin-right: 20px;
    border: none;
    height: 55px;
    outline: none;
    padding: 0 20px;
    font-size: 20px;
`

export const ChatButton = styled.button`
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 6px 10px;
    border-radius: 10px;
    outline: none;
    white-space: nowrap;
    background: #7B00FF;
    color: white;
    font-weight: 600;
`

export const ChatTopWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    height: calc(100% - 60px);
`

export const PlusButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: ${props => props.color || "black"};
    background: ${props => props.bgColor || "#FCFCFC"};
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 16px;
    transition: all 0.2s linear;
    ${props => !props.none && css`
        transform: translateY(6px);
    `}

    &:hover {
        text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transition-duration: 0.05s;
        text-shadow: none;
    }
`

//Profile Card
export const TitleJik = styled.p`
    color: ${props => props.color || "black"};
    font-size: ${props => props.fontSize || "18px"};
    font-weight: 600;
    transition: all 0.05s linear;
    opacity: 0;
    transform: translateY(0px);
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75px;
    height: 95px;

    &:hover ${TitleJik} {
        opacity: 1;
        transform: translateY(4px);
    }

    &:nth-child(3n + 1) {
        margin: 20px ${(320 - 225) / 4}px 10px;
    }
    &:nth-child(3n + 2) {
        margin: 20px ${(320 - 225) / 4}px 10px 0;
    }
    &:nth-child(3n + 3) {
        margin: 20px ${(320 - 225) / 4}px 10px 0;
    }
`

export const ProfileImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 15px;
`