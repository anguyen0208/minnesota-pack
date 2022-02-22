import React from 'react'
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import {colors} from "../../../styles/constant";
import Logo from './Logo';

const HamburgerToggle = ({handleNavToggle}) => {
    return (
        <ToggleContainer>
            <Logo />
            <StyledToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>
                <span>Menu</span>
                <FaBars />
            </StyledToggle>
        </ToggleContainer>

    )
}

const ToggleContainer = styled.div`
    position: fixed;
    top: 0;
    left: 3%;
    width: 12%;
    border-color: transparent;
    background: ${colors.Navy};
    padding: .6rem .2rem .5rem .2rem;
    display: block;
    place-items: center;
    z-index: 1;
`;

const StyledToggle = styled.button`
    color: ${colors.Silver};
    border-color: transparent;
    background: transparent;
    margin: 3% 0 0 30%; 
    display: block;
    place-items: center;
    font-size: 1.8rem;
    
    span{
        display: block;
        font-size: 1rem;
    }
    
    :hover{
    color:${colors.offWhite};
    }
`;

export default HamburgerToggle;