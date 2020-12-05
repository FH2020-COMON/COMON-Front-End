import styled from 'styled-components';
import LogoImage from "./logo.png";
const main_color = "#7B00FF";
export const Header = styled.header`
    color:${main_color};
    display: flex;
    height: 45px;
    justify-content: space-between;
    align-items: center;
    margin: 0 200px;
`;
export const HeaderMenu = styled.ul`
    display: flex;
    & a{
        color: #7b00f7;
    }
    & li{
        margin: 0 10px;
        cursor: pointer;
    }
`
export const Logo = styled.div`
    background: url(${LogoImage});
    width: 114px;
    background-position-y: 50%;
    height: 100%;
    background-repeat: no-repeat;
`;