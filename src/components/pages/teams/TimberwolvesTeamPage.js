import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import PlayerInfo from "../../API/player";
// import MetaTags from 'react-meta-tags';

const TimberwolvesTeamPage = () => {
    return (
        <div>
            {/*<MainNavigationModule />*/}
            <div className="container">
                <div className="wrapper">
                    <PlayerInfo/>
                </div>
            </div>
        </div>
    );
};

export default TimberwolvesTeamPage;