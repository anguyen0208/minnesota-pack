import styled from "styled-components";
import {colors} from "./constant";

export const MainContainer = styled.div`
    display: block;
    width: 100%;
    background-color: ${colors.lightGrey};
`;

export const Wrapper = styled.div`
    display: flex;
    width: 80%;
    margin: 0 10% 0 10%;
    padding: 0 0 5% 0;
    background-color: ${colors.offWhite};
`;

export const SectionHeader = styled.h1`
    text-decoration: none;
    font-size: clamp(2rem, 2vw, 3vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: relative;
    display: block;
    margin-bottom: 20px;
    
    &:after {
        content: "";
        display: block;
        width: 45px;
        height: 3px;
        background-color: #e0e721;
        margin-top: 2px;
    }
`;
