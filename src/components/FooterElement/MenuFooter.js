import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {colors} from "../../styles/constant";

function MenuFooter () {
    const [sponsors, setSponsor] = useState([]);

    const getSponsors = () => {
        axios.get('./api/sponsors.json')
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
                <SponsorWrapper>
                    {sponsors.map((sponsor) => (
                        <EachSponsor>
                            <a href={sponsor.url} rel="noopener">
                                    <img
                                        alt={sponsor.name}
                                        src={`${process.env.PUBLIC_URL}/assets/images/sponsors/${sponsor.name}-logo.png`}
                                    />
                            </a>
                        </EachSponsor>
                    ))}
                </SponsorWrapper>
            </SponsorsContainer>
        );
}

const SponsorsContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 75px;
    // background-color: ${colors.Navy};
`;

const SponsorWrapper = styled.div`
   width: 100%;
   display: flex;
   grid-template-columns: 1fr;
   column-gap: 25px;
   // row-gap: 25px;
`
const EachSponsor = styled.div`
   width: 100%;
   height: 100px;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   padding: 0 !important;
   margin: 0 !important;
   
   img{
       vertical-align: middle;
       horizontal-align: middle;
       width: 100%;
   }
`
export default MenuFooter;