import reset from 'styled-reset'
import { colors } from './constant'
import Fonts from "./fonts"
import { createGlobalStyle} from "styled-components"
// import TransitionStyles from "./transition"
// ${TransitionStyles};

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${Fonts};
/*============================
    Base
============================*/
  *, *::after, *::before {
      box-sizing: border-box;
  }
  
  :root {
    --font-size: 18px;
    
    --line-height: calc(var(--font-size)*1.5);
    --baseline: calc(var(--line-height)/2)
    
    --h1: 2.8rem;
    --h2: 2.2rem;
    --h3: 1.4rem;
    --h4: 1.1rem;
    
    --size-title: 9.2vw;
    
    --color-complement: #727272;
    --color-complement: #9b9b9b;
    --left-margin: 17.2rem;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  html, body {
    font-size: 18px;
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    display: block;
    background-color: ${colors.lightGrey};
    line-height: 1;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    :hover{
      color: ${colors.Green};
      text-decoration: none;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }
  
  .active{
      border-top: 3px solid ${colors.Green};
      background-color: ${colors.Navy};
      position: relative;
      
      ::after{
        content: " ";
        position: absolute;
        bottom: 0;
        top: 100%;
        left: 50%;
        border-top: 20px solid ${colors.Navy};
        width: 0;
        height: 10;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        // transform: translateX(-50%);
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        transform: translateX(-50%);
      }
  }
`;

export default GlobalStyle;
