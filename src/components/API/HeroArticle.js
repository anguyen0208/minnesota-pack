import {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import {ImageListItem, ImageListItemBar} from "@mui/material";

class HeroArticle extends Component {

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
        axios.get(`${(this.baseContentURL)}/timberwolves/article/?count=1`, this.options)
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
        const { isLoading, articles } = this.state;
        return (
            <HeroContainer>
                {!isLoading ? (
                    articles.map(article => {
                        const {headline, subheadline, url, image} = article;
                        return (
                                <Hero key={headline}>
                                    <a href={url} rel="noopener">
                                        <ImageListItem>
                                            <img src={image} alt={headline}/>
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
            </HeroContainer>
        );
    }
}

const HeroContainer = styled.div`
    position: relative;
    display: flex;
`;

const Hero = styled.div`
   margin: 0 auto;
   background: black;
    overflow: hidden;
    a:hover {
        transition: .2s all ease-in-out;
        opacity: 50%;
    }
`
export default HeroArticle;