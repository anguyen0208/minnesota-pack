import React from 'react';
import {
    PageTitle, PageTitleWrapper, PlayersContainer,
    SectionHeader,
    Wrapper
} from "../../../styles/main";
import TimberMatch from "../../elements/Matches/TimberMatch";
import SchedulesSubNavigation from "../../elements/Navigation/SubNavigation/SchedulesSubNavigation";


const SchedulesPage = () => {
    return (
        <Wrapper>
            <PageTitleWrapper>
                <PageTitle>SCHEDULES</PageTitle>
            </PageTitleWrapper>

            <SchedulesSubNavigation />
            <PlayersContainer>
                <TimberMatch />
            </PlayersContainer>

        </Wrapper>
    );
};

export default SchedulesPage;