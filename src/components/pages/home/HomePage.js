import React from 'react';
import LatestArticle from "../../API/LatestArticle";
import HeroArticle from "../../API/HeroArticle";
import LynxLatestArticle from "../../API/LynxLatestArticle";
// import MainNavigationModule from "../../Navigation/MainNavigation/MainNavigation";
// import PlayerInfo from "../../player";
// import MetaTags from 'react-meta-tags';

const HomePage = () => {
    return (
       <div>
           {/*<MainNavigationModule />*/}
           {/*<PlayerInfo />*/}
           <div className="container">
               <div className="wrapper">
                   <HeroArticle/>
                   <LatestArticle />
                   <LynxLatestArticle />
               </div>
           </div>
       </div>
    );
};

export default HomePage;