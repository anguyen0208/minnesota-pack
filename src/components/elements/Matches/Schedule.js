import {useEffect, useState} from "react";
import axios from "axios";
import {
    BottomInfoContainer, GameStadium, GenInfoContainer,
    PlayersWrapper, StadiumCity, Teams, TopInfoContainer,
} from "../../../styles/main";
import {Card, CardContent, Divider, Typography} from "@mui/material";

export default function Schedule({teamName, teamLeague}) {
    const [schedules, setSchedule] = useState([]);

    const getScheduleInfo = () => {
        axios.get(`https://data.${teamLeague}.com/data/10s/v2015/json/mobile_teams/${teamLeague}/2021/teams/${teamName}_schedule.json`)
            .then((response) => {
                console.log(response);
                const TeamSchedule = response.data.gscd.g;
                setSchedule(TeamSchedule)
            });
    };


    useEffect(() => {
        getScheduleInfo();
    }, []);

    return (
        <PlayersWrapper>
            {schedules.map((schedule) => (
                <Card sx={{maxWidth: 300}} key={schedule.gid}>
                    <CardContent>
                        {/*<-------------- Stadium Information --------------*/}
                        <GameStadium>
                            <Typography gutterBottom variant="subtitle1">
                                {schedule.an}
                            </Typography>
                            <StadiumCity>
                                <Typography variant="caption">
                                    {schedule.ac}, {schedule.as}
                                </Typography>
                            </StadiumCity>
                        </GameStadium>

                        <Divider/>

                        <TopInfoContainer>
                            {/*<-------------- TEAMS ---------------->*/}
                            <Teams>
                                <Typography gutterBottom variant="h5" component="div">
                                    {schedule.v.ta}
                                </Typography>
                            </Teams>

                            <Typography gutterBottom variant="button" component="div">
                                vs
                            </Typography>
                            <Teams>
                                <Typography gutterBottom variant="h5" component="div">
                                    {schedule.h.ta}
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
                                    {schedule.gdte}
                                </Typography>
                            </GenInfoContainer>

                            <Divider orientation="vertical" variant="middle" flexItem/>

                            <GenInfoContainer>
                                <Typography variant="caption" color="text.secondary">
                                    Time
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {schedule.stt}
                                </Typography>
                            </GenInfoContainer>
                        </BottomInfoContainer>
                    </CardContent>
                </Card>
            ))}
        </PlayersWrapper>
    );
}