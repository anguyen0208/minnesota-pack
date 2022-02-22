import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import LynxPlayerInfo from "../../API/playerLynx";
// import MetaTags from 'react-meta-tags';

const LynxTeamPage = () => {
    return (
        <div>
            {/*<MainNavigationModule />*/}

            <div className="container">
                <div className="wrapper">
                    <LynxPlayerInfo />
                </div>
            </div>
        </div>
    );
};

export default LynxTeamPage;