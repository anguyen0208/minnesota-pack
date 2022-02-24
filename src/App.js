import {useState} from "react";
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
import LynxSchedulesPage from "./components/pages/schedules/LynxSchedulesPage"
import LynxTeamPage from "./components/pages/teams/LynxTeamPage"
import TeamsPage from "./components/pages/teams/TimberwolvesTeamPage"


export default function App() {

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
                    <Route path='/schedules/timberwolves' element={<SchedulesPage />} />
                    <Route path='/schedules/lynx' element={<LynxSchedulesPage />} />
                    <Route path='/teams/timberwolves' element={<TeamsPage />} />
                    <Route path='/teams/lynx' element={<LynxTeamPage />} />
                </Routes>
            </Router>
            <MainFooter/>
        </MainContainer>
    );
}
