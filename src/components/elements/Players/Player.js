import {useEffect, useState} from "react";
import axios from "axios";
import {
    BottomInfoContainer, GenInfoContainer, PlayerInfoPos, PlayerNumber,
    PlayersWrapper, TopInfoContainer, TopLeftInfoContainer
} from "../../../styles/main";
import {Card, CardActionArea, CardContent, CardMedia, Divider, Typography} from "@mui/material";

export default function Player({teamName, teamLeague}){
const [players, setPlayer] = useState([]);

const getPlayerInfo = () => {
    axios.get(`https://data.${teamLeague}.com/data/10s/v2015/json/mobile_teams/${teamLeague}/2021/teams/${teamName}_roster.json`)
        .then((response) =>{
            console.log(response);
            const player = response.data.t.pl;
            setPlayer(player)
        });
};


useEffect(() => {
    getPlayerInfo();
},  []);

return (
        <PlayersWrapper>
            {players.map((player) => (
                <Card sx={{maxWidth: 300}} key={player.pid}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${process.env.PUBLIC_URL}/assets/images/teams/${teamName}/${player.pid}.png`}
                            alt={`${player.fn}`}
                        />
                        <CardContent>
                            {/*<-------------- Top Player Information --------------*/}
                            <TopInfoContainer>
                                {/*<-------------- Left-side: Player Name ---------------->*/}
                                <TopLeftInfoContainer>
                                    <Typography gutterBottom variant="button" component="div">
                                        {[player.fn +" "+ player.ln]}
                                    </Typography>
                                    {/*<-------------- Left-side: Position ---------------->*/}
                                    <PlayerInfoPos>
                                        <Typography variant="caption" color="text.secondary">
                                            {player.hcc}
                                        </Typography>
                                        <Typography variant="h6" >
                                            {player.pos}
                                        </Typography>
                                    </PlayerInfoPos>
                                </TopLeftInfoContainer>
                                {/*Player Number*/}
                                <PlayerNumber>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {player.num}
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
                                        {player.ht}
                                    </Typography>
                                </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                {/*Weight*/}
                               <GenInfoContainer>
                                   <Typography variant="caption" color="text.secondary">
                                       Weight
                                   </Typography>
                                   <Typography variant="h6" color="text.secondary">
                                       {player.wt}
                                   </Typography>
                               </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                {/*Year*/}
                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Year
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {player.y}
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
