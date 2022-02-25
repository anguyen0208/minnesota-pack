# Minnesota Pack

Timberwolves and Lynx Website for local and basketball fans. 

###Let's go Pack!!
![mn_packs](http://g.recordit.co/Md2zT2OLod.gif)
### API
- You can implement any of these content feeds and APIs. Documentation is included.
  
  - The NBA's Mobile Feed
    - [The Timberwolves 2021 roster](https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2021/teams/timberwolves_roster.json)
    - [The Timberwolves 2021 schedule](https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2021/teams/timberwolves_schedule.json)
    - [The Lynx 2021 roster](https://data.wnba.com/data/10s/v2015/json/mobile_teams/wnba/2021/teams/lynx_roster.json)
    - [The Lynx 2021 schedule](https://data.wnba.com/data/10s/v2015/json/mobile_teams/wnba/2021/teams/lynx_schedule.json)
  - Timberwolves Content API (video,article)
    - [The Timberwolves latest articles](https://api.nba.net/2/timberwolves/article/?count=4)
    - [The Timberwolves latest videos](https://api.nba.net/2/timberwolves/video/?count=4)
  - Timberwolves Content RSS

## Tools
- [React](https://reactjs.org/) - main framework
- [Talend API Tester](https://www.talend.com/) - check data
- [MUI](https://mui.com/) - UI library
- [Netlify](https://www.netlify.com/) - host
- [axios](https://axios-http.com/) - promise-based HTTP Client


## Prerequisites
- npm >= 8.4.0
- node >= 16.13.0

### Install

Download or clone this project then run `npm install` to install
dependencies in `package.json`:
```html
{
  "dependencies": {
    "@emotion/react": "^11.8.1",
    "@emotion/styled": "^11.8.1",
    "@mui/material": "^5.4.2",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.26.0",
    "gh-pages": "^3.2.3",
    "gsap": "^3.9.1",
    "material-ui-popup-state": "^2.0.0",
    "node-sass": "^7.0.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.1.2",
    "react-dom": "^17.0.2",
    "react-full-screen": "^1.1.0",
    "react-icons": "^4.3.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "react-spring": "^9.4.3",
    "styled-components": "^5.3.3",
    "styled-reset": "^4.3.4",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "gh-pages": "^3.2.3",
    "invariant": "^2.2.4",
    "react-router-dom": "^6.2.1",
    "reactjs-popup": "^2.0.5"
  }
}
```
### Usage
`
npm run start
`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Personal Checklist
- [x] Research target audience
- [x] Fetch NBA and WNBA API
- [x] Simple new design for Minnesota Pack
- [x] Landing page (navigation, sub navigation, logo, header, footer)
- [x] Schedule Page with sub navigation for each team
- [x] Players Page with sub navigation for each team
- [ ] Latest news for Lynx
- [ ] Responsive sor screen size
- [ ] Stats  for each player
- [ ] Schedule group by month
- [ ] Coaches Information
