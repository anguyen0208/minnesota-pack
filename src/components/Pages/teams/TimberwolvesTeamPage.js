import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import PlayerInfo from "../../Players/player";
import SubNavigation from "../../Navigation/SubNavigation/SubNavigation";
import {Wrapper} from "../../../styles/main";

const TimberwolvesTeamPage = () => {
    return (

       <Wrapper>
           <SubNavigation />
           <div className="container">
               <PlayerInfo/>
           </div>
       </Wrapper>
    )
};

export default TimberwolvesTeamPage;