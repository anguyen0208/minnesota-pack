import React from 'react';
import LatestArticle from "../../elements/Articles/LatestArticle";
import HeroArticle from "../../elements/Articles/HeroArticle";
import LatestVideo from "../../elements/Articles/LatestVideo";
import {Wrapper} from "../../../styles/main";


const HomePage = () => {
    return (
           <Wrapper>
               <div className="container">
                   <HeroArticle/>
                   <LatestArticle />
                   <LatestVideo />
               </div>
           </Wrapper>
    );
};


export default HomePage;