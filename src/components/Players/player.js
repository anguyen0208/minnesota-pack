import {useEffect, useState} from "react";
import axios from "axios";
// import {Avatar, Divider, List, ListItem, ListItemText} from "@mui/material";
import {
    BottomInfoContainer, GenInfoContainer, PlayerInfoPos, PlayerNumber,
    PlayersWrapper, TopInfoContainer, TopLeftInfoContainer
} from "../../styles/main";
import {Card, CardActionArea, CardContent, CardMedia, Divider, Typography} from "@mui/material";

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
                <Card sx={{maxWidth: 300}} key={timberPlayer.pid}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${process.env.PUBLIC_URL}/assets/images/teams/timberwolves/${timberPlayer.pid}.png`}
                            alt={`${timberPlayer.fn}`}
                        />
                        <CardContent>
                            {/*<-------------- Top Player Information --------------*/}
                            <TopInfoContainer>
                                {/*<-------------- Left-side: Player Name ---------------->*/}
                                <TopLeftInfoContainer>
                                    <Typography gutterBottom variant="button" component="div">
                                        {[timberPlayer.fn +" "+ timberPlayer.ln]}
                                    </Typography>
                                    {/*<-------------- Left-side: Position ---------------->*/}
                                    <PlayerInfoPos>
                                        <Typography variant="caption" color="text.secondary">
                                            {timberPlayer.hcc}
                                        </Typography>
                                        <Typography variant="h6" >
                                            {timberPlayer.pos}
                                        </Typography>
                                    </PlayerInfoPos>
                                </TopLeftInfoContainer>
                                {/*Player Number*/}
                                <PlayerNumber>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {timberPlayer.num}
                                    </Typography>
                                </PlayerNumber>
                            </TopInfoContainer>

                            <Divider/>

                            {/*<-------------- Bottom Player Information --------------*/}
                            <BottomInfoContainer>

                                {/*Height*/}
                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Height
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {timberPlayer.ht}
                                    </Typography>
                                </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                {/*Weight*/}
                               <GenInfoContainer>
                                   <Typography variant="caption" color="text.secondary">
                                       Weight
                                   </Typography>
                                   <Typography variant="h6" color="text.secondary">
                                       {timberPlayer.wt}
                                   </Typography>
                               </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                {/*Year*/}
                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Year
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {timberPlayer.y}
                                    </Typography>
                                </GenInfoContainer>
                            </BottomInfoContainer>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </PlayersWrapper>
    );
}

export default PlayerInfo;