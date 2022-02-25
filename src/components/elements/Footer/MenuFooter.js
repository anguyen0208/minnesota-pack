import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

function MenuFooter () {
    const [menuSponsors, setMenuSponsor] = useState([]);

    const getSponsors = () => {
        axios.get(`${process.env.PUBLIC_URL}/api/sponsors.json`)
            .then((response) =>{
                console.log(response);
                const sponsors = response.data;
                setMenuSponsor(sponsors)
            });
    };


    useEffect(() => {
        getSponsors()
    },  []);

        return (
            <MenuSponsorsContainer>
                <MenuSponsorWrapper>
                    {menuSponsors.map((sponsor) => (
                        <MenuEachSponsor key={sponsor.id}>
                            <a href={sponsor.url} rel="noopener">
                                <img
                                    alt={sponsor.name}
                                    src={`${process.env.PUBLIC_URL}/assets/images/sponsors/${sponsor.name}-logo.png`}
                                />
                            </a>
                        </MenuEachSponsor>
                    ))}
                </MenuSponsorWrapper>
            </MenuSponsorsContainer>
        );
}

const MenuSponsorsContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 75px 0 75px;
`;

const MenuSponsorWrapper = styled.div`
   width: 100%;
   display: flex;
   grid-template-columns: 1fr;
   column-gap: 25px;
`
const MenuEachSponsor = styled.div`
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