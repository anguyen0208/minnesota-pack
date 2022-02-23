import {useEffect, useState} from "react";
import axios from "axios";
// import {Avatar, Divider, List, ListItem, ListItemText} from "@mui/material";
import {PlayersWrapper} from "../../styles/main";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

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
        <PlayersWrapper>
            {timberPlayers.map((timberPlayer) => (
                <Card sx={{maxWidth: 260}} key={timberPlayer.pid}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${process.env.PUBLIC_URL}/assets/images/teams/timberwolves/${timberPlayer.pid}.png`}
                            alt={`${timberPlayer.fn}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {[timberPlayer.fn +" "+ timberPlayer.ln]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </PlayersWrapper>
    );
}

export default PlayerInfo;