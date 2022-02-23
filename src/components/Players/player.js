import {useEffect, useState} from "react";
import axios from "axios";
import {Avatar, Divider, List, ListItem, ListItemText} from "@mui/material";
import {Wrapper} from "../../styles/main";

function PlayerInfo(){
const [timberPlayers, setTimberPlayer] = useState([]);

const getTimberPlayerInfo = () => {
    axios.get('https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2021/teams/timberwolves_roster.json')
        .then((response) =>{
            console.log(response);
            const timberPlayer = response.data.t.pl;
            setTimberPlayer(timberPlayer)
        });
};


useEffect(() => {
    getTimberPlayerInfo();
},  []);

return (
        <Wrapper>
            {timberPlayers.map((timberPlayer) => (
                <List key={timberPlayer.pid}>
                    <ListItem alignItems="flex-start">
                        <Avatar alt={`${timberPlayer.fn}`} src={`${process.env.PUBLIC_URL}/assets/images/teams/timberwolves/${timberPlayer.pid}.png`}/>
                        <ListItemText primary={[timberPlayer.fn +" "+ timberPlayer.ln]}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            ))}
        </Wrapper>
    );
}

export default PlayerInfo;