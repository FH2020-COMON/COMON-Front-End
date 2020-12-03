import styled from 'styled-components';
const main_color = "#7B00FF";
export const Modal_overlay=styled.div`
    background: black;
    opacity: 0.3;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
` 
export const Modal_Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 999;
    top: 0;
`
export const Modal_Wrapper=styled.div`
    background: white;
    width: 450px;
    padding: 16px;
    position: relative;
    z-index: 99;
    border-radius: 10px;
`
export const Modal_Logo=styled.div`
    text-align: center;
    margin-bottom: 20px;
`
export const Login_Form=styled.form`
    display: flex;
    flex-direction: column;
    & input{
        border: none;
        outline: none;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        height: 50px;
        padding-right: 10px;
        padding-left: 10px;
        margin: 10px 0;
    }
    & button{
        border :none;
        background: #7B00FF;
        color: white;
        padding: 16px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 15px;
        margin-top: 50px;
        font-weight: bold;
    }
    & h4{
        margin-top: 10px;
    }
`
