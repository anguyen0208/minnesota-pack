import React from 'react';
import styled from "styled-components";
import {colors} from "../../../styles/constant";


const SubNavigation = () => {
    return (
        <SubNavigationContainer>
            <SubNavigationBar>
                <SubNavigationBarItem className="is-parent" role="listitem">
                    <SubNavigationBarItemSub href={`${process.env.PUBLIC_URL}/teams/timberwolves`}>Teams</SubNavigationBarItemSub>
                </SubNavigationBarItem>
                <SubNavigationBarItem className="in-sub-selected" role="listitem">
                    <SubNavigationBarItemSub href={`${process.env.PUBLIC_URL}/teams/timberwolves`}>Timberwolves</SubNavigationBarItemSub>
                </SubNavigationBarItem>
                <SubNavigationBarItem className="in-sub-selected" role="listitem">
                    <SubNavigationBarItemSub href={`${process.env.PUBLIC_URL}/teams/lynx`}>Lynx</SubNavigationBarItemSub>
                </SubNavigationBarItem>
            </SubNavigationBar>
        </SubNavigationContainer>

    )
}

const SubNavigationContainer = styled.div`
    width: 100%;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: Lato, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    // border: 1px solid red;
`;
const SubNavigationBar = styled.div`
    width: 100%;
    // background-color: ${colors.Silver};
    display: table;
    table-layout: fixed;
    padding-left: 30px;
    box-sizing: border-box;
`;

const SubNavigationBarItem = styled.div`
    display: table-cell;
    width: 1%;
    padding: 2px;
    text-align: center;
    vertical-align: middle;
    color: ${colors.offWhite};
    background-color: rgba(17,24,54,.9);
    cursor: pointer;
    
    is-parent{
        background-color: rgba(11,14,30,.75);
    }
    
    in-sub-selected{
        border-top: 2px solid ${colors.Green};
        padding-top: 0;
        position: relative;
    
        // a{
        //     content: " ";
        //     display: block;
        //     position: absolute;
        //     width: 30px;
        //     height: 2px;
        //     left: 50%;
        //     bottom: 0;
        //     -webkit-transform: translateX(-50%);
        //     -ms-transform: translateX(-50%);
        //     transform: translateX(-50%);
        //     background-color: #e0e721;
        // }
    }
`;
const SubNavigationBarItemSub = styled.a`
    font-size: 1rem;
    letter-spacing: .5px;
    color: ${colors.lightGrey};
    user-select: none;
    width: 100%;
    white-space: nowrap;
    height: 100%;
    display: block;
    line-height: 44px;
    
    :after{
        content: " ";
        display: block;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 50%;
        bottom: 0;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        background-color: #e0e721;
    }
`;

export default SubNavigation;