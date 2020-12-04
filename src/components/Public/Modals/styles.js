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
        font-weight: bold;
        margin-top: 30px;
    }
    & p{
        text-align: "end";
        margin-top: 20px;
        font-size: 14px;
        cursor: pointer;
        color: #333;
        &:hover{
            text-decoration: underline;
        }
    }
    & h4{
        margin-top: 10px;
    }
`
export const Invest_Form=styled.div`
    display: flex;
    flex-direction: column;
    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    & h4{
        margin: 10px 0;
        margin-top: 15px;
        margin-left: 16px;
        color: #333;
    }
`
export const Invest_Submit=styled.div`
    border :none;
    background: #7B00FF;
    color: white;
    padding: 16px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
`
export const Money_State=styled.div`
    display: flex;
    align-items: center;
    & span{
        font-size: 30px;
        padding: 16px;
        color: #7B00FF;
    }
    & input{
        border: none;
        outline: none;
        font-size: 20px;
    }
    & i {
        margin-left: auto;
        font-size: 18px;
        color: #7B00FF;
        cursor: pointer;
        padding: 16px;
    }
`
export const Money_box=styled.div`
    display: flex;
    justify-content: flex-end;
    
`
export const Add_money=styled.button`
    border: 1px solid #eee;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 10px;
    padding: 5px 10px;
    color: #333;
    outline: none;
    font-weight: bold;
`
export const Cheering_Message=styled.textarea`
    outline: none;
    border: none;
    resize: none;
    border-bottom: 2px solid #7B00FF;
    border-radius: 5px;
    height: 180px;
    padding: 8px;
    margin: 0 16px;
`
