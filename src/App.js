import React, {Fragment} from 'react';
import './App.css'
import {CssBaseline, Grid, Typography, makeStyles} from '@material-ui/core'
import {Route} from "react-router";
import {HomePage} from "./Pages/HomePage";
import {Content} from "./content";
import _ from "lodash";
import {ExperiencePage} from "./Components/ExperiencePage";
import voopty from "./Pages/img/voopty_logo.png";
import fb from "./Pages/img/fb.png";
import ig from "./Pages/img/ig.png";

const useAppStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: "column",
    },
    logo: {
        height: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },
    autoWidth: {
        width: 'auto',
        minWidth: theme.spacing(27),
    },
    content: {
        flex: '1 0 auto',
        maxWidth: theme.spacing(150),
        margin: `0 auto`
    },
    footer: {
        maxWidth: theme.spacing(100),
        padding: theme.spacing(0, 2),
        margin: `${theme.spacing(2)}px auto`
    }
}));

export const App = (props) => {
    const classes = useAppStyles(props);
    return (
        <Fragment>
            <CssBaseline/>
            <div className={classes.root}>
                <div className={classes.content}>
                    <Route component={HomePage} path="/" exact/>
                    {Content.map(({name, img, ...rest}) => <Route path={`/${_.kebabCase(name)}`} render={() =>
                        <ExperiencePage title={name}
                                        image={img}
                                        {...rest}/>
                    }/>)}</div>
                <Grid item container className={classes.footer} justify="space-evenly">
                    <Grid item className={classes.autoWidth} container justify="center"
                          direction="column">
                        <Grid item container className={classes.autoWidth} alignItems="center">
                            <Typography variant="caption">Powered by </Typography><img className={classes.logo}
                                                                                       src={voopty}/>
                        </Grid>
                        <a href="https://www.voopty.com/search/usa/washington-dc" target="_blank">Voopty DC Community</a>
                        <a href="https://biz.voopty.com" target="_blank">Voopty for Business</a>
                        <a href="https://www.voopty.com/privacy-policy" target="_blank">Privacy Policy</a>
                        <a href="https://www.voopty.com/terms-and-conditions" target="_blank">Terms and
                            Conditions</a>
                        <Grid item>
                            <Typography variant="caption">Voopty © 2019. All rights reserved</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.autoWidth} direction="column">

                        <Typography variant="h6">Questions? Contact us!</Typography><a
                        href="mailto:support@voopty.com">support@voopty.com</a>
                        <Typography variant="h6">Follow us!</Typography>
                        <Grid item container className={classes.autoWidth}>
                            <a href="https://www.facebook.com/vooptyBot" target="_blank"><img src={fb}
                                                                                              className={classes.logo}/></a>
                            <a href="https://www.instagram.com/voopty_usa/" target="_blank"><img src={ig}
                                                                                                 className={classes.logo}/></a>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}