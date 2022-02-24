import {useEffect, useState} from "react";
import axios from "axios";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Divider,
    Typography
} from "@mui/material";
import {
    BottomInfoContainer, GenInfoContainer,
    PlayerInfoPos,
    PlayerNumber,
    PlayersWrapper,
    TopInfoContainer,
    TopLeftInfoContainer
} from "../../../styles/main";

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
            <Card sx={{maxWidth: 300}} key={lynxPlayer.pid}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`${process.env.PUBLIC_URL}/assets/images/teams/lynx/${lynxPlayer.pid}.png`}
                        alt={`${lynxPlayer.fn}`}
                    />
                    <CardContent>
                        {/*<-------------- Top Player Information --------------*/}
                        <TopInfoContainer>
                            {/*<-------------- Left-side: Player Name ---------------->*/}
                            <TopLeftInfoContainer>
                                <Typography gutterBottom variant="button" component="div">
                                    {[lynxPlayer.fn +" "+ lynxPlayer.ln]}
                                </Typography>
                                {/*<-------------- Left-side: Position ---------------->*/}
                                <PlayerInfoPos>
                                    <Typography variant="caption" color="text.secondary">
                                        {lynxPlayer.hcc}
                                    </Typography>
                                    <Typography variant="h6" >
                                        {lynxPlayer.pos}
                                    </Typography>
                                </PlayerInfoPos>
                            </TopLeftInfoContainer>
                            {/*Player Number*/}
                            <PlayerNumber>
                                <Typography gutterBottom variant="h3" component="div">
                                    {lynxPlayer.num}
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
                                    {lynxPlayer.ht}
                                </Typography>
                            </GenInfoContainer>

                            <Divider orientation="vertical" variant="middle" flexItem />

                            {/*Weight*/}
                            <GenInfoContainer>
                                <Typography variant="caption" color="text.secondary">
                                    Weight
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {lynxPlayer.wt}
                                </Typography>
                            </GenInfoContainer>

                            <Divider orientation="vertical" variant="middle" flexItem />

                            {/*Year*/}
                            <GenInfoContainer>
                                <Typography variant="caption" color="text.secondary">
                                    Year
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {lynxPlayer.y}
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

export default LynxPlayerInfo;