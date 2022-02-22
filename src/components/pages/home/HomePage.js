import React from 'react';
import LatestArticle from "../../API/LatestArticle";
import HeroArticle from "../../API/HeroArticle";
import LynxLatestArticle from "../../API/LynxLatestArticle";
import {Wrapper} from "../../../styles/main";


const HomePage = () => {
    return (
       // <MainContainer>
           <Wrapper>
               <div className="container">
                   {/*<div className="wrapper">*/}
                   <HeroArticle/>
                   <LatestArticle />
                   <LynxLatestArticle />
                   {/*</div>*/}
               </div>
           </Wrapper>
       // </MainContainer>
    );
};


export default HomePage;