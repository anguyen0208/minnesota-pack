import React from 'react';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import styled from "styled-components";
import {colors} from "../../../styles/constant";

import Logo from "./Logo";


const Menu = ({handleNavToggle}) => {
    return (
        <MenuContainer>
            <StyledMenu>
                <MenuLogoContainer className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/">
                    <Logo/>
                </MenuLogoContainer>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/schedules">SCHEDULES</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/teams/timberwolves">TEAMS</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/teams/lynx"> Lynx Teams Page</StyledLink>
                <CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}><FaTimes/></CloseToggle>
            </StyledMenu>
        </MenuContainer>

    )
}

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${colors.Navy};
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const MenuLogoContainer = styled.div`
    position: fixed;
    top: 6%;
    left: 5%;
    display: flex;

    img{
        width: 100px;
    }
`;
const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    // @media screen and (min-width: 790px) {
    //     width: 60%;
    // }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const StyledLink = styled(Link)`
    color: ${colors.offWhite};
    margin-left: 25%;
    padding-bottom: 2%;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
    &:hover {
        transition: .2s all ease-in-out;
        color: ${colors.Green};
    }
`;

const CloseToggle = styled.button`
    position: fixed;
    top: 5%;
    right: 5%;
    background: transparent;
    color: ${colors.Silver};
    border: transparent;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    
    :hover{
        color: ${colors.offWhite};
    }
`;

export default Menu;