import React from 'react';

import {PageTitle, PageTitleWrapper, PlayersContainer, Wrapper} from "../../../styles/main";

import SubNavigation from "../../elements/Navigation/SubNavigation/SubNavigation";
import Player from "../../elements/Players/Player";
import {useParams} from "react-router-dom";


export default function TeamsPage() {

    const{team} = useParams();

    return (
        <Wrapper>
            <PageTitleWrapper>
                <PageTitle>TEAMS</PageTitle>
            </PageTitleWrapper>

            <SubNavigation />
            <PlayersContainer>
                {team ==='lynx' && <Player teamName='lynx' teamLeague='wnba'/>}

                {team ==='timberwolves' && <Player teamName='timberwolves' teamLeague='nba'/>}
            </PlayersContainer>
        </Wrapper>
    );
};
