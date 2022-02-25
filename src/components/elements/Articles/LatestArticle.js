import styled from "styled-components";
import {Card, CardMedia, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {colors} from "../../../styles/constant";
import {SectionHeader} from "../../../styles/main";

import React, {useEffect, useState} from "react";
import axios from "axios";

export default function LatestArticle() {
    const [articles, setArticle] = useState([]);


    const baseContentURL = 'https://api.nba.net/2';

    const options = {
        headers: {
            'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b'
        }
    };

    const getArticle = () => {
        axios.get(`${baseContentURL}/timberwolves/article/?count=4`, options)
            .then((response) => {
                console.log(response);
                const article = response.data.response.result;
                setArticle(article)
            });
    };


    useEffect(() => {
        getArticle();
    }, []);

    return (
        <LatestArticleContainer>

            <SectionHeader>
                The Latest
            </SectionHeader>

            <ImageList
                sx={{
                    width: 900,
                    height: 500,
                    transform: 'translateZ(0)',
                }}
                rowHeight={250}
                gap={8}
            >

                {articles.map(article => {
                        return (

                            <Card sx={{ maxWidth: 445 }} key={article.nid}>
                                <ImageListItem key={article.nid}>
                                <a href={`https://www.nba.com${article.url}`} rel="noopener">
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={article.listImage ? article.listImage.thumbnail : `${process.env.PUBLIC_URL}/assets/images/logo/img_1.png`}
                                            alt={article.title}
                                        />

                                        <ImageListItemBar
                                            title={article.title}
                                            subtitle={article.subheadline}
                                            position="bottom"
                                        />
                                </a>
                                </ImageListItem>
                            </Card>

                        )
                    }
                )}
            </ImageList>
        </LatestArticleContainer>
    );
}

const LatestArticleContainer = styled.div`
    position: relative;
    margin: 100px 0 0 5%;
    // display: block;
    background-color: ${colors.offWhite};

`;

// const ArticleWrapper = styled.div`
//     margin: 1px auto;
//     background: black;
//     overflow: hidden;
//
//
//     a:hover {
//     opacity: 50%;
//
// `
