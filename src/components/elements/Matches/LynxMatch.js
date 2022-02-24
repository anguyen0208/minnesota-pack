import {useEffect, useState} from "react";
import axios from "axios";
import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Typography
} from "@mui/material";
import {
    BottomInfoContainer, GameStadium, GenInfoContainer,
    PlayersWrapper, StadiumCity, Teams, TopInfoContainer
} from "../../../styles/main";

function LynxMatchInfo(){
    const [lynxMatches, setLynxMatches] = useState([]);


    const getLynxMatchInfo = () => {
        axios.get('https://data.wnba.com/data/10s/v2015/json/mobile_teams/wnba/2022/teams/lynx_schedule.json')
            .then((response) =>{
                console.log(response);
                const lynxMatch = response.data.gscd.g;
                setLynxMatches(lynxMatch)
            });
    };


    useEffect(() => {
        getLynxMatchInfo()
    },  []);

    return (

        <PlayersWrapper>
            {lynxMatches.map((lynxMatch) => (
                <Card sx={{maxWidth: 300}} key={lynxMatch.gid}>
                    <CardActionArea>
                        <CardContent>
                            {/*<-------------- Stadium Information --------------*/}
                            <GameStadium>
                                <Typography gutterBottom variant="subtitle1">
                                    {lynxMatch.an}
                                </Typography>
                                <StadiumCity>
                                    <Typography  variant="caption">
                                        {lynxMatch.ac}, {lynxMatch.as}
                                    </Typography>
                                </StadiumCity>
                            </GameStadium>

                            <Divider/>

                            <TopInfoContainer>
                                {/*<-------------- TEAMS ---------------->*/}
                                <Teams>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {lynxMatch.v.tn}
                                    </Typography>
                                </Teams>

                                    <Typography gutterBottom variant="button" component="div">
                                        vs
                                    </Typography>
                                <Teams>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {lynxMatch.h.tn}
                                    </Typography>
                                </Teams>
                            </TopInfoContainer>

                            <Divider/>

                            {/*<-------------- Bottom Player Information --------------*/}
                            <BottomInfoContainer>
                                {/*Date*/}
                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Date
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {lynxMatch.gdte}
                                    </Typography>
                                </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {lynxMatch.stt}
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

export default LynxMatchInfo;