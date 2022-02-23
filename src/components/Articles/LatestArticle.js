import {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {colors} from "../../styles/constant";
import {SectionHeader} from "../../styles/main";

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
        axios.get(`${(this.baseContentURL)}/timberwolves/article/?count=4`, this.options)
            // Once we get a response, we'll map the API endpoints to our props
            .then(response =>
                response.data.response.result.map(article => ({
                    headline: `${article.headline}`,
                    subheadline: `${article.subheadline}`,
                    url: `https://www.nba.com/${article.url}`,
                    image: `${article.listImage.thumbnail}`,
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
                    The Latest
                </SectionHeader>

                <ImageList
                    sx={{
                        width: 900,
                        height: 550,
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={270}
                    gap={8}
                >
                    {!isLoading ? (
                        articles.map(article => {
                            const cols = article.img ? 2 : 1;
                            const rows = article.img ? 2 : 1;
                            const {headline, subheadline, url, image} = article;

                            return (
                                <ArticleWrapper>
                                    <a href={url} rel="noopener">
                                        <ImageListItem key={headline} cols={cols} rows={rows}>
                                            <img {...srcset(article.img, 250, 225, rows, cols)}
                                                 src={image}
                                                 alt={headline}
                                            />
                                            <ImageListItemBar
                                                title={headline}
                                                subtitle={subheadline}
                                                position="bottom"
                                            />
                                        </ImageListItem>
                                    </a>
                                </ArticleWrapper>
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
    margin: 100px 0 0 5%;
    // display: block;
    background-color: ${colors.offWhite};
`;

const ArticleWrapper = styled.div`
   margin: 1px auto;
   background: black;
   overflow: hidden;
   
    a:hover {
        opacity: 50%;
    }
`
export default LatestArticle;