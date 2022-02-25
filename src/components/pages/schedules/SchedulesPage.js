import React from 'react';
import {
    PageTitle, PageTitleWrapper, PlayersContainer, Wrapper
} from "../../../styles/main";
import SchedulesSubNavigation from "../../elements/Navigation/SubNavigation/SchedulesSubNavigation";
import Schedule from "../../elements/Matches/Schedule";
import {useParams} from "react-router-dom";


export default function SchedulesPage() {
    const{team} = useParams();
    return (
        <Wrapper>
            <PageTitleWrapper>
                <PageTitle>SCHEDULES</PageTitle>
            </PageTitleWrapper>

            <SchedulesSubNavigation />
            <PlayersContainer>
                {team ==='lynx' && <Schedule teamName='lynx' teamLeague='wnba'/>}
                {team ==='timberwolves' && <Schedule teamName='timberwolves' teamLeague='nba'/>}
            </PlayersContainer>

        </Wrapper>
    );
};
