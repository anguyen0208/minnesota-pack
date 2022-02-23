import React from 'react';
import LatestArticle from "../../Articles/LatestArticle";
import HeroArticle from "../../Articles/HeroArticle";
import LynxLatestArticle from "../../Articles/LynxLatestArticle";
import {Wrapper} from "../../../styles/main";


const HomePage = () => {
    return (
           <Wrapper>
               <div className="container">
                   {/*<div className="wrapper">*/}
                   <HeroArticle/>
                   <LatestArticle />
                   <LynxLatestArticle />
                   {/*</div>*/}
               </div>
           </Wrapper>
    );
};


export default HomePage;