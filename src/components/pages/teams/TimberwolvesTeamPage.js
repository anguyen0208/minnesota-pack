import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import PlayerInfo from "../../API/player";
// import MetaTags from 'react-meta-tags';

const TimberwolvesTeamPage = () => {
    return (
        <div>
            {/*<MainNavigationModule />*/}
            <PlayerInfo />
            <div className="container">
                <div className="wrapper">
                    <h5>
                        The <b>TimberWolves</b>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default TimberwolvesTeamPage;