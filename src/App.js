import { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import HamburgerToggle from './components/elements/Navigation/MainMenu/HamburgerToggle';
import Menu from './components/elements/Navigation/MainMenu/Menu';
import MainFooter from "./components/elements/Footer/MainFooter";

//styles
import GlobalStyle from "./styles/GlobalStyle";
import {DecorativeBar, MainContainer} from "./styles/main";


//pages
import HomePage from "./components/pages/home/HomePage"
import SchedulesPage from "./components/pages/schedules/SchedulesPage"
import PlayersPage from "./components/pages/players/PlayersPage"



const teams=[
    {id: 1, teamName: 'lynx', league: 'wnba'},
    {id: 2, teamName: 'timberwolves', league: 'nba'}
]

function App(){
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <DecorativeBar />
            <HamburgerToggle handleNavToggle={handleNavToggle} />
            <Router>
                {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/schedules/:team' element={<SchedulesPage team={teams.teamName}/>} />
                    <Route path='/players/:team' element={<PlayersPage team={teams.teamName}/>}/>
                </Routes>
            </Router>
            <MainFooter/>
        </MainContainer>
    );
}

export default App;