import {useEffect, useState} from "react";
import axios from "axios";
// import {Container} from "@mui/material";
import {Container, ImageListItem, ImageListItemBar} from "@mui/material";
import styled from "styled-components";
import {colors} from "../../styles/constant";
// import {Avatar, Divider, List, ListItem, ListItemText} from "@mui/material";

function LatestArticle(){
    // const baseContentURL = 'https://api.nba.net/2';
    //
    // let options = {
    //     headers: {
    //         'accessToken':'internal|bb88df6b4c2244e78822812cecf1ee1b'
    //     }
    // };
    const [latestArticle, setLatestArticle] = useState([]);


    const getLatestArticle = () => {
        axios.get(`${process.env.PUBLIC_URL}/assets/article.json`)

            .then((response) =>{
                console.log(response);
                const latestArticle = response.data.response.result[0];
                setLatestArticle(latestArticle)
            })
        ;
    };

    useEffect(() => {
        getLatestArticle();
    }, []);

    return (
        <LatestArticleContainer>
                <ImageListItem>
                    <a href={`https://www.nba.com${latestArticle.url}`} target="_blank"  rel="noopener noreferrer">
                        <img src={`${latestArticle.listImage.thumbnail}`} alt={latestArticle.title}/>
                        <ImageListItemBar
                            title={latestArticle.title}
                            // position="below"
                        />
                    </a>
                </ImageListItem>
        </LatestArticleContainer>
    );
}

const LatestArticleContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    
    a:hover{
        color: ${colors.Blue};
        opacity:6;
    }
`;
export default LatestArticle;