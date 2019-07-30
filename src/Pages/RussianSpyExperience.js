import React from 'react';
import {ExperiencePage} from "../Components/ExperiencePage";
import russianSpy from './img/white-house-kgb.jpg'

export const RussianSpyExperience = () => {
    return (<ExperiencePage title="Russian Spy Experience"
                            price={10}
                            image={russianSpy}
                            dinner="Russia house dinner" drink="Mari Vanna" location="Spy museum"/>
    )
}