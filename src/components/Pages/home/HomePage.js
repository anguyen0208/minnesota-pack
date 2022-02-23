import React from 'react';
import LatestArticle from "../../Articles/LatestArticle";
import HeroArticle from "../../Articles/HeroArticle";
import LatestVideo from "../../Articles/LatestVideo";
import {Wrapper} from "../../../styles/main";


const HomePage = () => {
    return (
           <Wrapper>
               <div className="container">
                   {/*<div className="wrapper">*/}
                   <HeroArticle/>
                   <LatestArticle />
                   <LatestVideo />
                   {/*</div>*/}
               </div>
           </Wrapper>
    );
};


export default HomePage;