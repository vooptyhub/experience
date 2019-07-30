import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {LocalDrink, LocationOn, Restaurant, ArrowBack} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: theme.spacing(100),
        width: '100%',
        margin: `0 auto ${theme.spacing(2)}px`,
    },
    buttonBack: {
        maxWidth: theme.spacing(100),
        width: '100%',
        margin: `${theme.spacing(2)}px auto`,
    },
    content: {
        padding: theme.spacing(4),
    },
    item: {padding: 0},
    image: {
        height: '50vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: ({image}) => `url('${image}')`,
        backgroundPosition: 'center'
    }
}));

export const ExperiencePage = (props) => {
    const {title, children, dinner, drink, location} = props;
    const [showForm, setShowFrom] = useState(false)
    const classes = useStyles(props);

    return (
        <Grid container>
            <Grid item>
                <Button component={Link} to="/"><ArrowBack/>Back</Button>
            </Grid>
            <Paper className={classes.root}>
                <div className={classes.image}>&nbsp;</div>
                <Grid container direction="column" className={classes.content} spacing={2}>
                    <Grid item container>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item container direction="column">
                        <List>
                            <ListItem className={classes.item}>
                                <ListItemIcon>
                                    <Restaurant/>
                                </ListItemIcon>
                                <ListItemText>{dinner}</ListItemText>
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon>
                                    <LocalDrink/>
                                </ListItemIcon><ListItemText>{drink}</ListItemText></ListItem>
                            <ListItem className={classes.item}><ListItemIcon>
                                <LocationOn/>
                            </ListItemIcon><ListItemText>{location}</ListItemText></ListItem>
                        </List>
                        {children}
                    </Grid>
                    <Grid item container>
                        {showForm ? <div style={{width: '100%'}} dangerouslySetInnerHTML={{
                            __html: `<iframe height="408" title="Embedded Wufoo Form" allowTransparency="true" frameBorder="0"
                            scrolling="no" style="width:100%;border:none"
                            src="https://nastyakh.wufoo.com/embed/z1f178q612dcbgu/"><a
                        href="https://nastyakh.wufoo.com/forms/z1f178q612dcbgu/">Fill out my Wufoo form!</a></iframe>`
                        }}/> : <Button variant="contained" color="secondary"
                                       onClick={() => setShowFrom(true)}>Get</Button>}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}