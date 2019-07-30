import React from 'react';
import {ExperienceCard} from "../Components/ExperienceCard";
import houseOfCards from './img/House_of_Cards_title_card.png'
import russianSpy from './img/white-house-kgb.jpg'
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        height: `calc(100% - ${theme.spacing(2)}px)`
    },
}));
export const HomePage = () => {
    const classes = useStyles();
    return (<Grid container spacing={2} className={classes.root}>
        <Grid item>
            <ExperienceCard title="House Of Cards Experience"
                            price={15}
                            description="Let the Underwood be your guide around DC"
                            path="/house-of-cards" image={houseOfCards}/>
        </Grid>
        <Grid item>
            <ExperienceCard title="Russian Spy Experience" description="Explore DC like a russian spy"
                            path="/russian-spy" image={russianSpy}/>
        </Grid>
        <Grid item>
            <ExperienceCard title="Game Experience" description="Explore DC like a russian spy"
                            price={20}
                            path="/karthik-game" image={null}/>
        </Grid>
        <Grid item>
            <ExperienceCard title="Georgetown Experience" description="Explore DC like a russian spy"
                            path="/georgetown" image={null}/>
        </Grid>
        <Grid item>
            <ExperienceCard title="Bikeable Brews Experience" description="Explore DC like a russian spy"
                            path="/bikeable-brews" image={null}/>
        </Grid>
    </Grid>)
}