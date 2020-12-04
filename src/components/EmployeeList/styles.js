import styled from "styled-components"
export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
`

export const Card=styled.div`
    margin: 10px 0;
    & img{
        border-radius: 50%;
        margin-right: 15px;
    }
`
export const Profile=styled.div`
    display: flex;
    align-items: center;
`
export const ProfileDetails=styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
`
export const Name=styled.h4`
    font-size: 13px;
`
export const Email=styled.p`
    font-size: 12px;
    margin-bottom: 5px;
`