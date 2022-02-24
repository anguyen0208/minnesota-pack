import React from 'react';
import {
    PageTitle, PageTitleWrapper, PlayersContainer,
    SectionHeader,
    Wrapper
} from "../../../styles/main";
import LynxMatch from "../../elements/Matches/LynxMatch";
import SchedulesSubNavigation from "../../elements/Navigation/SubNavigation/SchedulesSubNavigation";


const LynxSchedulesPage = () => {
    return (
        <Wrapper>
            <PageTitleWrapper>
                <PageTitle>SCHEDULES</PageTitle>
            </PageTitleWrapper>

            <SchedulesSubNavigation />
            <PlayersContainer>
                <LynxMatch />
            </PlayersContainer>

        </Wrapper>
    );
};

export default LynxSchedulesPage;