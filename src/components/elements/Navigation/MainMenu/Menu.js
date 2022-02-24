import React from 'react';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import styled from "styled-components";
import {colors} from "../../../../styles/constant";

import Logo from "./Logo";
import MenuFooter from "../../Footer/MenuFooter";


const Menu = ({handleNavToggle}) => {
    return (
        <MenuContainer>

            <MenuLogoContainer className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/">
                <Logo/>
            </MenuLogoContainer>

            <StyledMenu>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/schedules/timberwolves">SCHEDULES</StyledLink>
                <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/teams/timberwolves">TEAMS</StyledLink>
                <a className="animate__animated animate__fadeInRight" href="https://www.targetcenter.com/" target='_blank' rel="noopener noreferrer">TARGET CENTER</a>
                <CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}><FaTimes/></CloseToggle>
            </StyledMenu>

            <MenuFooterContainer>
                <MenuFooter />
            </MenuFooterContainer>

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
    width: 100%;
    padding: 0 0 0 25%;
    color: ${colors.offWhite};
    text-decoration: none;
    font-size: clamp(4rem, 4vw, 6vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
 
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
    margin-bottom: 4%;
    text-decoration: none;
    font-size: clamp(4rem, 4vw, 6vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    
    &:hover {
        transition: .2s all ease-in-out;
        color: ${colors.Green};
    }
`;

const MenuFooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
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