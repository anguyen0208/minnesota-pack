import React from 'react';
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
import LynxPlayerInfo from "../../API/playerLynx";
// import MetaTags from 'react-meta-tags';

const LynxTeamPage = () => {
    return (
        <div>
            {/*<MainNavigationModule />*/}
            <LynxPlayerInfo />
            <div className="container">
                <div className="wrapper">
                    <h5>
                        The <b>Lynx</b>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default LynxTeamPage;