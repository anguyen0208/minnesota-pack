import {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    ImageList,
    ImageListItem,
    Typography
} from "@mui/material";
import {SectionHeader} from "../../styles/main";

class LatestVideo extends Component {

    state = {
        videos: [],
        isLoading: true,
        errors: null
    };

    baseContentURL = 'https://api.nba.net/2';

    options = {
        headers: {
            'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'
        }
    };

    componentDidMount() {
        // We're using axios instead of Fetch
        axios.get(`${(this.baseContentURL)}/timberwolves/video/?count=6`, this.options)
            // Once we get a response, we'll map the API endpoints to our props
            .then(response =>
                response.data.response.result.map(video => ({
                    nid: `${video.nid}`,
                    title: `${video.title}`,
                    url: `https://www.nba.com/${video.url}`,
                    mp4: `${video.mp4}`
                }))
            )
            // Let's make sure to change the loading state to display the data
            .then(videos => {
                this.setState({
                    videos,
                    isLoading: false
                });
            })
            .catch(error => this.setState({error, isLoading: false}));
    };


    render() {

        const { isLoading, videos } = this.state;
        return (
            <LatestVideoContainer>

                <SectionHeader>
                    Latest from Lynx
                </SectionHeader>

                <ImageList
                    sx={{
                        width: 900,
                        height: 880,
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={250}
                    gap={10}
                >
                    {!isLoading ? (
                        videos.map(video => {
                            return(
                                <Card sx={{ maxWidth: 445 }} key={video.nid}>
                                    <ImageListItem key={video.nid}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="iframe"
                                                height="200"
                                                src={video.mp4}
                                                alt={video.title}
                                            />
                                            <CardContent>
                                                {/*<ImageListItemBar*/}
                                                {/*    title={video.title}*/}
                                                {/*    position="bottom"*/}
                                                {/*/>*/}
                                                <Typography gutterBottom variant="body1" component="div">
                                                    {video.title}
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                    </ImageListItem>
                                    {/*<CardActionArea>*/}
                                    {/*    <CardMedia*/}
                                    {/*        component="iframe"*/}
                                    {/*        height="220"*/}
                                    {/*        src={video.mp4}*/}
                                    {/*        alt={video.title}*/}
                                    {/*    />*/}
                                    {/*    <CardContent>*/}
                                    {/*        <ImageListItemBar*/}
                                    {/*            title={video.title}*/}
                                    {/*            position="bottom"*/}
                                    {/*        />*/}
                                    {/*    /!*<Typography gutterBottom variant="h6" component="div">*!/*/}
                                    {/*    /!*    {video.title}*!/*/}
                                    {/*    /!*</Typography>*!/*/}
                                    {/*    </CardContent>*/}
                                    {/*</CardActionArea>*/}
                                </Card>
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </ImageList>
            </LatestVideoContainer>
        );
    }
}

const LatestVideoContainer = styled.div`
    position: relative;
    padding: 5% 0 0 5%;
    display: block;
`;

export default LatestVideo;