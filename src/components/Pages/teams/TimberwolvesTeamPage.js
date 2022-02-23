import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import PlayerInfo from "../../Players/player";
import SubNavigation from "../../Navigation/SubNavigation/SubNavigation";
import {PageTitle, PageTitleWrapper, PlayersContainer, Wrapper} from "../../../styles/main";

const TimberwolvesTeamPage = () => {
    return (

       <Wrapper>
           <PageTitleWrapper>
               <PageTitle>TEAMS</PageTitle>
           </PageTitleWrapper>

           <SubNavigation />

           <PlayersContainer>

                   <PlayerInfo/>


           </PlayersContainer>
       </Wrapper>
    )
};

export default TimberwolvesTeamPage;