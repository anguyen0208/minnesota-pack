import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import LynxPlayerInfo from "../../Players/playerLynx";
import SubNavigation from "../../Navigation/SubNavigation/SubNavigation";
import {Wrapper} from "../../../styles/main";
// import MetaTags from 'react-meta-tags';

const LynxTeamPage = () => {
    return (
        <Wrapper>
            <SubNavigation />
            <div className="container">
                <LynxPlayerInfo />
            </div>
        </Wrapper>
    );
};

export default LynxTeamPage;