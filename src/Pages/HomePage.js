import React from 'react';
import {ExperienceCard} from "../Components/ExperienceCard";
import {Grid, makeStyles} from '@material-ui/core';
import {Content} from '../content'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        height: `calc(100% - ${theme.spacing(2)}px)`
    },
}));
export const HomePage = () => {
    const classes = useStyles();
    return (<Grid container spacing={2} className={classes.root}>
        {Content.map(c => <Grid item>
            <ExperienceCard title={c.name}
                            description={c.shortDescription}
                            path={`/${_.kebabCase(c.name)}`} image={c.img}/>
        </Grid>)}

    </Grid>)
}