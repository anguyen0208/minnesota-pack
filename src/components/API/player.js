import {useEffect, useState} from "react";
import axios from "axios";
import {Avatar, Divider, List, ListItem, ListItemText} from "@mui/material";

function PlayerInfo(){
const [timberPlayer, setTimberPlayer] = useState([]);

const getTimberPlayerInfo = () => {
    axios.get('https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2021/teams/timberwolves_roster.json')
        .then((response) =>{
            console.log(response);
            const timberPlayers = response.data.t.pl;
            setTimberPlayer(timberPlayers)
        });
};


useEffect(() => {
    getTimberPlayerInfo();
},  []);

return (
    <div>
            {timberPlayer.map((timberPlayers) => (
                <List key={timberPlayers.pid}>
                    <ListItem alignItems="flex-start">
                        <Avatar alt={`${timberPlayers.fn}`} src={`${process.env.PUBLIC_URL}/assets/images/teams/timberwolves/${timberPlayers.pid}.png`}/>
                        <ListItemText primary={[timberPlayers.fn +" "+ timberPlayers.ln]}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            ))}
    </div>
);
}

export default PlayerInfo;