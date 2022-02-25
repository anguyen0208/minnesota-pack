import React from 'react';
import styled from "styled-components";
import {colors} from "../../../../styles/constant";
import {NavLink} from "react-router-dom";


const SubNavigation = ({handleSubNavigation}) => {
    return (
        <SubNavigationContainer>
            <SubNavigationBar>
                <SubNavigationBarItem >
                    <StyledLink activeclassname="active"  onClick={handleSubNavigation}  to='/teams/timberwolves'>Timberwolves</StyledLink>
                </SubNavigationBarItem>
                <SubNavigationBarItem >
                    <StyledLink activeclassname="active" onClick={handleSubNavigation}   to='/teams/lynx'>Lynx</StyledLink>
                </SubNavigationBarItem>
            </SubNavigationBar>
        </SubNavigationContainer>

    )
}

const SubNavigationContainer = styled.div`
    width: 100%;
    font-size: clamp(2rem, 2vw, 6vw);
    font-family: Lato, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;
const SubNavigationBar = styled.ul`
    width: 100%;
    background-color: ${colors.offWhite};
    display: table;
    table-layout: fixed;
    box-sizing: border-box;
`;

const SubNavigationBarItem = styled.li`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color: ${colors.offWhite};
    background-color: rgba(17,24,54,.8);
    cursor: pointer;
`;


const StyledLink = styled(NavLink)`
    font-size: 1rem;
    letter-spacing: .5px;
    color: ${colors.lightGrey};
    user-select: none;
    width: 100%;
    white-space: nowrap;
    height: 100%;
    display: block;
    line-height: 44px;
    
    &:hover {
        transition: .2s all ease-in-out;
        color: ${colors.Green};
    }

`;

export default SubNavigation;