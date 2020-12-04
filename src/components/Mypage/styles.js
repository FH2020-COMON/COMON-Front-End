import styled from "styled-components"
export const Container=styled.div`
`
export const Wrapper=styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
`
export const Myprofile=styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    & img{
        border-radius: 50%;
        margin-right: 15px;
    }
`
export const Mydetails=styled.div`
    display: flex;
    flex-direction: column;
`
export const Myname=styled.h4`
`
export const Mycompany=styled.p`
    font-size: 14px;
`
export const SwitchAccount=styled.div`
    background: #7B00FF;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    margin-left: auto;
    cursor: pointer;
`
export const MyElement=styled.div`
    padding: 10px 0px;
    margin: 10px 5px;
    cursor: pointer;
    color: #646464;
    & i {
        margin-right: 5px;
    }
`
export const Logout=styled.div`
    padding: 10px 0px;
    font-weight: bold;
    color: #7B00FF;
    text-align: end;
    margin-right: 10px;
    cursor: pointer;
`