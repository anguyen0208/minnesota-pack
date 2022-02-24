import {Component} from "react";
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
//
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

class LynxPlayerInfo extends Component {
    state = {
        players: [],
        isLoading: true,
        errors: null
    }

// const [lynxPlayers, setLynxPlayer] = useState([]);
    teams=[
        {
            name: 'lynx',
            league: 'wnba'
        },
        {
            name: 'timberwolves',
            league: 'nba'
        }
    ];

    componentDidMount() {
        axios.get(`https://data.wnba.com/data/10s/v2015/json/mobile_teams/wnba/2021/teams/lynx_roster.json`)
            .then(response =>
                // console.log(response);
                response.data.t.pl.map(player => ({
                    pid: `${player.nid}`,
                    fn: `${player.fn}`,
                    ln: `${player.ln}`,
                    hcc: `${player.hcc}`,
                    po: `${player.po}`,
                    num: `${player.num}`,
                    ht: `${player.ht}`,
                    wt: `${player.wt}`,
                    y: `${player.y}`,
                    image: `${process.env.PUBLIC_URL}/assets/images/teams/lynx/${player.pid}.png`
                }))
            )
            .then(players => {
                this.setState({
                    players,
                    isLoading: false
                });
            })
            .catch(error => this.setState({error, isLoading:false}));
    };

//
// useEffect(() => {
//     getLynxPlayerInfo()
// },  []);
    render() {
        // function PopoverPopupState() {
        //     return (
        //         <PopupState variant="popover" popupId="demo-popup-popover">
        //             {(popupState) => (
        //                 <div>
        //                     {/*<Button variant="contained" {...bindTrigger(popupState)}>*/}
        //                     {/*    Open Popover*/}
        //                     {/*</Button>*/}
        //                     <Popover
        //                         {...bindPopover(popupState)}
        //                         anchorOrigin={{
        //                             vertical: 'bottom',
        //                             horizontal: 'center',
        //                         }}
        //                         transformOrigin={{
        //                             vertical: 'top',
        //                             horizontal: 'center',
        //                         }}
        //                     >
        //                         <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        //                     </Popover>
        //                 </div>
        //             )}
        //         </PopupState>
        //     );
        // }

        const { isLoading, players } = this.state;
        return (

            <PlayersWrapper>
                {!isLoading ? (
                    players.map(player => {

                const {pid,fn,ln,hcc,po,num,ht,wt,y,image} = player;

                return(
                <Card sx={{maxWidth: 300}} key={pid}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="200"
                            image={image}
                            alt={fn}
                        />
                        <CardContent>
                            {/*<-------------- Top Player Information --------------*/}
                            <TopInfoContainer>
                                {/*<-------------- Left-side: Player Name ---------------->*/}
                                <TopLeftInfoContainer>
                                    <Typography gutterBottom variant="button" component="div">
                                        {[fn + " " + ln]}
                                    </Typography>
                                    {/*<-------------- Left-side: Position ---------------->*/}
                                    <PlayerInfoPos>
                                        <Typography variant="caption" color="text.secondary">
                                            {hcc}
                                        </Typography>
                                        <Typography variant="h6">
                                            {po}
                                        </Typography>
                                    </PlayerInfoPos>
                                </TopLeftInfoContainer>
                                {/*Player Number*/}
                                <PlayerNumber>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {num}
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
                                        {ht}
                                    </Typography>
                                </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem/>

                                {/*Weight*/}
                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Weight
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {wt}
                                    </Typography>
                                </GenInfoContainer>

                                <Divider orientation="vertical" variant="middle" flexItem/>

                                {/*Year*/}
                                <GenInfoContainer>
                                    <Typography variant="caption" color="text.secondary">
                                        Year
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {y}
                                    </Typography>
                                </GenInfoContainer>
                            </BottomInfoContainer>
                        </CardContent>
                    </CardActionArea>
                </Card>
                );
                    })) :(
                        <p>Loading...</p>
                    )}
            </PlayersWrapper>
        );
    }
}

export default LynxPlayerInfo;