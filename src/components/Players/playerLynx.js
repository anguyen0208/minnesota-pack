import {useEffect, useState} from "react";
import axios from "axios";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import {PlayersWrapper} from "../../styles/main";

function LynxPlayerInfo(){
const [lynxPlayers, setLynxPlayer] = useState([]);


const getLynxPlayerInfo = () => {
    axios.get('https://data.wnba.com/data/10s/v2015/json/mobile_teams/wnba/2021/teams/lynx_roster.json')
        .then((response) =>{
            console.log(response);
            const lynxPlayer = response.data.t.pl;
            setLynxPlayer(lynxPlayer)
        });
};


useEffect(() => {
    getLynxPlayerInfo()
},  []);

return (
    <PlayersWrapper>
        {lynxPlayers.map((lynxPlayer) => (
            <Card sx={{maxWidth: 260}} key={lynxPlayer.pid}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`${process.env.PUBLIC_URL}/assets/images/teams/lynx/${lynxPlayer.pid}.png`}
                        alt={`${lynxPlayer.fn}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {[lynxPlayer.fn +" "+ lynxPlayer.ln]}
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

export default LynxPlayerInfo;