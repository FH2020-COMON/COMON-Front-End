import styled from "styled-components"
export const ApplyContainer=styled.div`
    
`
export const ApplyWrapper=styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
`
export const Apply=styled.button`
    height: 40px;
    background: #7B00FF;
    color: white;
    border: none;
    outline: none;
    border-radius: 30px;
    font-weight: bold;;
`
export const FileBox=styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    & input{
        display: none;
    }
`
export const FileSelectBT=styled.div`
    background: #7B00FF;
    color: white;
    padding: 5px 10px; 
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
`
export const FileState=styled.div`
    border: 1px solid #eee;
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
    width: 88%;
`
export const DownloadBox=styled.div`
    width: 100%;
    border: 1px solid #eee;
    display: flex;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    & i{
        margin-right: 5px;
        color: #7B00FF;
    }
`