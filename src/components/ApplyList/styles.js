import styled from "styled-components"
export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    margin: 0 auto;
`
export const Card=styled.div`
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;
`
export const InterViewBT=styled.button`
    border: none;
    background: #7B00F7;
    color: white;
    font-weight: bold;
    padding: 8px;
    border-radius: 30px;
    cursor: pointer;
    outline: none;
`
export const CompanyDetails=styled.div`
    display: flex;
    align-items: center;
    & img{
        border-radius: 5px;
        width: 60px;
        height: 60px;
    }
`
export const Details=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const Name=styled.h4`
    font-size: 14px;
    display: flex;
`
export const State=styled.p`
    font-size: 13px;
    color: green;
    margin-left: 10px;
`
export const Date=styled.p`
    font-size: 13px;
`