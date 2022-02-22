import {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";

class LatestArticle extends Component {

    state = {
        articles: [],
        isLoading: true,
        errors: null
    };

    baseContentURL = 'https://api.nba.net/2';

    options = {
        headers: {
            'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'
        }
    };

    // const [isLoading,latestArticle, setLatestArticle] = useState([]);


    // const getLatestArticle = () =>
    componentDidMount() {
        // We're using axios instead of Fetch
        axios.get(`${(this.baseContentURL)}/timberwolves/video/?count=6`, this.options)
            // Once we get a response, we'll map the API endpoints to our props
            .then(response =>
                response.data.response.result.map(article => ({
                    headline: `${article.headline}`,
                    subheadline: `${article.subheadline}`,
                    url: `https://www.nba.com/${article.url}`,
                    image: `${article.listImage.raw.url}`
                }))
            )
            // Let's make sure to change the loading state to display the data
            .then(articles => {
                this.setState({
                    articles,
                    isLoading: false
                });
            })
            // We can still use the `.catch()` method since axios is promise-based
            .catch(error => this.setState({error, isLoading: false}));
    };


    render() {

        function srcset(image, width, height, rows = 1, cols = 1) {
            return {
                src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
                srcSet: `${image}?w=${width * cols}&h=${
                    height * rows
                }&fit=crop&auto=format&dpr=2 2x`,
            };
        }

        const { isLoading, articles } = this.state;
        return (
            <LatestArticleContainer>

                <SectionHeader>
                    Latest from Lynx
                </SectionHeader>


                <ImageList
                    sx={{
                        width: 900,
                        height: 750,
                        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={245}
                    gap={8}
                >
                    {!isLoading ? (
                        articles.map(article => {
                            const cols = article.featured ? 2 : 1;
                            const rows = article.featured ? 2 : 1;
                            const {headline, subheadline, url, image} = article;

                            return (
                                <Hero >
                                    <a href={url} rel="noopener">
                                        <ImageListItem key={headline} cols={cols} rows={rows}>
                                            <img {...srcset(image, 250, 225, rows, cols)} src={image} alt={headline}/>
                                            <ImageListItemBar
                                                title={headline}
                                                subtitle={subheadline}
                                            />
                                        </ImageListItem>
                                    </a>
                                </Hero>
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </ImageList>
            </LatestArticleContainer>
        );
    }
}

const LatestArticleContainer = styled.div`
    position: relative;
    margin: 100px 0 0 120px;
    display: block;
`;
const SectionHeader = styled.h1`
    text-decoration: none;
    font-size: clamp(2rem, 2vw, 3vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: relative;
    display: block;
    margin-bottom: 20px;
    
    &:after {
        content: "";
        display: block;
        width: 45px;
        height: 3px;
        background-color: #e0e721;
        margin-top: 2px;
    }
`;
const Hero = styled.div`
   margin: 1px auto;
   background: black;
   overflow: hidden;
   
    a:hover {
        transition: .2s all ease-in-out;
        opacity: 50%;
    }
`
export default LatestArticle;