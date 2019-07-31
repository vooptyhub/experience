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
    TextField,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    FormHelperText,
} from '@material-ui/core';
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
                        {showForm ? <ContactFrom/> : <Button variant="contained" color="secondary"
                                                             onClick={() => setShowFrom(true)}>Get</Button>}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

const useFromStyles = makeStyles((theme) => ({
    formControl: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: theme.spacing(1),
        position: 'relative',
        transform: 'none',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
    }
}));
export const ContactFrom = () => {
    const classes = useFromStyles();

    const [values, setValues] = useState({
        EMAIL: '',
        VISITING: "2",
        VISITING_FROM: '',
    });
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    const emailError = values.EMAIL && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.EMAIL);

    const submit = () => {
        if (emailError) {
            return
        }

        var formData = new FormData();

        Object.keys(values).forEach(k => formData.append(k, values[k]));

        fetch("https://sibforms.com/serve/MUIEAOcRsCQTqqddysTZ4cAPPQrevduL9Fwd3iGOJKRTpcUTQPwaUr8wRnUW6Pn5-PpI6Dx01GJ9r9Luafvt70XZxLTLKwWbj7snupwOlzeVzSENNVeRBWqrVSUiI8ZR6Ws75fnljeMeIynmLGwIUhH23coDDUNXJ4whGqmbBNJM2PTYTV4Mfps_D0YoNKIjyQssaUYcXEAu9Tuq?isAjax=1", {
            method: "POST",
            body: formData
        });
    }
    return (<Grid container direction="column" spacing={2}>
        <Grid item>
            <FormControl className={classes.formControl} error={emailError}>
                <InputLabel htmlFor='email' className={classes.label}>Email:
                </InputLabel>
                <TextField
                    id="email"
                    placeholder="For e.g abc@xyz.com"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={values.EMAIL}
                    onChange={handleChange('EMAIL')}
                />

                {emailError && <FormHelperText>Invalid email, expected format is abc@xyz.com</FormHelperText>}
            </FormControl></Grid>
        <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.label}>Are you local or visiting?</FormLabel>
                <RadioGroup
                    name="VISITING"
                    value={values.VISITING}
                    onChange={handleChange('VISITING')}>
                    <FormControlLabel value="1" control={<Radio/>} label="Local"/>
                    <FormControlLabel value="2" control={<Radio/>} label="Visiting"/>
                </RadioGroup>
            </FormControl></Grid>
        {values.VISITING === "2" &&
        <Grid item>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='VISITING_FROM' className={classes.label}>Where are you visiting from?
                </InputLabel>
                <TextField
                    id="VISITING_FROM"
                    placeholder="City or Town"
                    name="VISITING_FROM"
                    value={values.VISITING_FROM}
                    onChange={handleChange('VISITING_FROM')}
                />
            </FormControl>
        </Grid>}
        <Grid item container>
            <Button variant="contained" color="secondary"
                    onClick={submit}>Send</Button>
        </Grid>
    </Grid>)
}