import styled from "styled-components";
import {colors} from "./constant";

export const MainContainer = styled.div`
    display: block;
    width: 100%;
    background-color: ${colors.lightGrey};
`;
export const DecorativeBar = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${colors.Navy1};
`;

export const Wrapper = styled.div`
    display: block;
    width: 80%;
    margin: 0 10% 0 10%;
    padding: 0 0 5% 0;
    background-color: ${colors.offWhite};
`;
export const PageTitleWrapper = styled.div`
   width: 100%;
   display: block;
`
export const PageTitle = styled.div`
    text-decoration: none;
    font-size: clamp(5rem, 2.5vw, 3vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: relative;
    display: block;
    width: 100%;
    height: 165px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 35px 5% 0 10%;
    
    &:before {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background-color: ${colors.Green};
        margin-top: 2px;
    }
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

export const PlayersContainer = styled.div`
    text-decoration: none;
    display: block;
    padding: 35px 35px 0 35px;
`;

export const PlayersWrapper = styled.div`
    display: block;
    width: 100%;
    // margin: 0 10% 0 10%;
    padding: 5% 0 5% 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    column-gap: 25px;
    row-gap: 25px;
    background-color: ${colors.offWhite};
`;