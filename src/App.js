import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import HamburgerToggle from './components/Navigation/MainMenu/HamburgerToggle';
import Menu from './components/Navigation/MainMenu/Menu';
import MainFooter from "./components/FooterElement/MainFooter";

//styles
import GlobalStyle from "./styles/GlobalStyle";
import {DecorativeBar, MainContainer} from "./styles/main";


//pages
import HomePage from "./components/Pages/home/HomePage"
import SchedulesPage from "./components/Pages/schedules/SchedulesPage"
import LynxTeamPage from "./components/Pages/teams/LynxTeamPage"
import TeamsPage from "./components/Pages/teams/TimberwolvesTeamPage"


export default function App() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <DecorativeBar/>
            <HamburgerToggle handleNavToggle={handleNavToggle} />
            <Router>
                {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/schedules' element={<SchedulesPage />} />
                    <Route path='/teams/timberwolves' element={<TeamsPage />} />
                    <Route path='/teams/lynx' element={<LynxTeamPage />} />
                </Routes>
            </Router>
            <MainFooter/>
        </MainContainer>
    );
}
