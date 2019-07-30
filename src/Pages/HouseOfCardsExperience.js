import React from 'react';
import {ExperiencePage} from "../Components/ExperiencePage";
import houseOfCards from "./img/House_of_Cards_title_card.png";

export const HouseOfCardsExperience = () => {
    return (<ExperiencePage title="House Of Cards Experience"
                            price={15}
                            image={houseOfCards}
                            dinner="Federalist pig" drink="Lion bar" location="Row houses along T Street in
                    NW"/>
    )
}