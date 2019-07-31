import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Typography,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Dialog,
    DialogContent
} from '@material-ui/core';
import {LocalDrink, LocationOn, Restaurant, ArrowBack} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import {SendInBlueContactModal} from "./SendInBlueContactModal";

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
    const {title, children, description} = props;
    const classes = useStyles(props);
    const [open, setOpen] = useState(false);

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
                        {description}
                        {children}
                    </Grid>
                    <Grid item container>
                        <Button variant="contained" color="secondary"
                                onClick={() => setOpen(true)}>Get</Button>
                    </Grid>
                </Grid>
            </Paper>
            <SendInBlueContactModal open={open} setOpen={setOpen} {...props}/>
        </Grid>
    );
}