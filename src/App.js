import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import HamburgerToggle from './components/Navigation/MainMenu/HamburgerToggle';
import Menu from './components/Navigation/MainMenu/Menu';

//styles
import GlobalStyle from "./styles/GlobalStyle";

//pages
import HomePage from "./components/pages/home/HomePage"
import SchedulesPage from "./components/pages/schedules/SchedulesPage"
import LynxTeamPage from "./components/pages/teams/LynxTeamPage"
import TeamsPage from "./components/pages/teams/TimberwolvesTeamPage"

export default function App() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

    return (
        <div>
            <GlobalStyle />
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
        </div>
    );
}
