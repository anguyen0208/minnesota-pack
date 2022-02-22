import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {Avatar, Divider, ImageList, ImageListItem, List, ListItem, ListItemText} from "@mui/material";
import {colors} from "../../styles/constant";

function MainFooter () {
    const [sponsors, setSponsor] = useState([]);

    const getSponsors = () => {
        axios.get('./sponsors.json')
            .then((response) =>{
                console.log(response);
                const sponsors = response.data;
                setSponsor(sponsors)
            });
    };


    useEffect(() => {
        getSponsors()
    },  []);

        return (
            <SponsorsContainer>
                <ImageList
                    sx={{
                        width: 500,
                        height: 450,
                        transform: 'translateZ(0)',
                    }}
                    gap={8}
                >
                    {sponsors.map((sponsor) => (
                        <List key={sponsor.id}>
                            <ListItem alignItems="flex-start">
                                <Avatar alt={`${sponsor.name}`} src={`${process.env.PUBLIC_URL}/assets/images/sponsors/${sponsor.name}-logo.png`}/>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    ))}
                    {/*{sponsors.map(({id,name,url}) =>*/}
                    {/*    <SponsorWrapper>*/}
                    {/*        <a href={url} rel="noopener">*/}
                    {/*            <ImageListItem key={id}>*/}
                    {/*                <img*/}
                    {/*                    alt={name}*/}
                    {/*                    src={`${process.env.PUBLIC_URL}/assets/images/sponsors/${name}-logo.png`}*/}
                    {/*                />*/}
                    {/*            </ImageListItem>*/}
                    {/*        </a>*/}
                    {/*    </SponsorWrapper>*/}
                    {/*)})}*/}
                </ImageList>
            </SponsorsContainer>
        );
}

const SponsorsContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    background-color: ${colors.Navy};
`;

const SponsorWrapper = styled.div`
   margin: 1px auto;
    a:hover {
        opacity: 50%;
    }
`
export default MainFooter;