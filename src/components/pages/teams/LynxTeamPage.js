import React from 'react';

import LynxPlayerInfo from "../../elements/Players/LynxPlayer";
import SubNavigation from "../../elements/Navigation/SubNavigation/SubNavigation";
import {PageTitle, PageTitleWrapper, PlayersContainer, Wrapper} from "../../../styles/main";


const LynxTeamPage = () => {
    return (
        <Wrapper>
            <PageTitleWrapper>
                <PageTitle>TEAMS</PageTitle>
            </PageTitleWrapper>

            <SubNavigation />
            <PlayersContainer>
                <LynxPlayerInfo />
            </PlayersContainer>
        </Wrapper>
    );
};

export default LynxTeamPage;