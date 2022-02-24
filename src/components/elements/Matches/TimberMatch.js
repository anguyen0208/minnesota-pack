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
    BottomInfoContainer, GameStadium, GenInfoContainer, MatchesWrapper,
     StadiumCity, Teams, TopInfoContainer
} from "../../../styles/main";

function TimberMatchInfo(){
    const [timberMatches, setTimberMatches] = useState([]);


    const getTimberMatchInfo = () => {
        axios.get('https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2021/teams/timberwolves_schedule.json')
            .then((response) =>{
                console.log(response);
                const timberMatch = response.data.gscd.g;
                setTimberMatches(timberMatch)
            });
    };


    useEffect(() => {
        getTimberMatchInfo()
    },  []);

    return (
        <MatchesWrapper>
            {timberMatches.map((timberMatch) => (
                <Card sx={{maxWidth: 450}} key={timberMatch.gid}>
                    <CardActionArea>
                        <CardContent>
                            {/*<-------------- Stadium Information --------------*/}
                            <GameStadium>
                                <Typography gutterBottom variant="subtitle1">
                                    {timberMatch.an}
                                </Typography>
                                <StadiumCity>
                                    <Typography  variant="caption">
                                        {timberMatch.ac}, {timberMatch.as}
                                    </Typography>
                                </StadiumCity>
                            </GameStadium>

                            <Divider/>

                            <TopInfoContainer>
                                {/*<-------------- TEAMS ---------------->*/}
                                <Teams>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {timberMatch.v.ta}
                                    </Typography>
                                </Teams>

                                <Typography gutterBottom variant="button" component="div">
                                    vs
                                </Typography>
                                <Teams>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {timberMatch.h.ta}
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
                                        {timberMatch.gdte}
                                    </Typography>
                                </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem />

                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Time
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {timberMatch.stt}
                                    </Typography>
                                </GenInfoContainer>
                            </BottomInfoContainer>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </MatchesWrapper>
    );
}

export default TimberMatchInfo;