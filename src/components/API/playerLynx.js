import {useEffect, useState} from "react";
import axios from "axios";
import {Avatar, Divider, List, ListItem, ListItemText} from "@mui/material";

function LynxPlayerInfo(){
const [lynxPlayer, setLynxPlayer] = useState([]);


const getLynxPlayerInfo = () => {
    axios.get('https://data.wnba.com/data/10s/v2015/json/mobile_teams/wnba/2021/teams/lynx_roster.json')
        .then((response) =>{
            console.log(response);
            const lynxPlayers = response.data.t.pl;
            setLynxPlayer(lynxPlayers)
        });
};


useEffect(() => {
    getLynxPlayerInfo()
},  []);

return (
    <div>
            {lynxPlayer.map((lynxPlayers) => (
                <List key={lynxPlayers.pid}>
                    <ListItem alignItems="flex-start">
                        <Avatar alt={`${lynxPlayers.fn}`} src={`${process.env.PUBLIC_URL}/assets/images/teams/lynx/${lynxPlayers.pid}.png`}/>
                        <ListItemText primary={[lynxPlayers.fn +" "+ lynxPlayers.ln]}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            ))}
    </div>
);
}

export default LynxPlayerInfo;