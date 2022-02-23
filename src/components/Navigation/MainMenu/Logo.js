import React from 'react';
import {Container } from 'react-bootstrap';
import LynxLogo from '../../../assets/images/logo/lynx-logo.svg'
import TimberLogo from '../../../assets/images/logo/timberLogo.svg'
import styled from "styled-components";

function Logo() {

    return (
        <Container>
            <LogoContainer>
                <a href="/">
                    <img src={TimberLogo} alt="Timberwolves Logo"/>
                    <span> </span>
                    <img src={LynxLogo} alt="Lynx Logo"/>
                </a>
            </LogoContainer>
        </Container>

    );
}

const LogoContainer = styled.div`
    display: flex;
    width: 100%;

    img{
        width: 50px;
    }
`;
export default Logo;