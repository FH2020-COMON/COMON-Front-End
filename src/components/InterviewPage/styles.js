import styled from "styled-components"
export const Wrapper=styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
`
export const Viewer=styled.div`
    height: 80%;
`
export const NextButton=styled.div`
    background: #7B00F7;
    color: white;
    font-weight: bold;
    padding: 8px;
    cursor: pointer;
    border-radius: 30px;
    text-align: center;

`
export const CheckLabel=styled.label`
    display: flex;
    align-items: center;
    margin:10px 10px;
    & p{
        margin-left: 5px;
    }
`
export const Title=styled.h3`
    margin: 10px 0;
    padding-bottom: 3px;
    color: #7B00F7;
    border-bottom: 1px solid #7B00F7;
`