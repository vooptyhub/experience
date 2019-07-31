import {
    Button, Dialog, DialogContent,
    FormControl, FormControlLabel,
    DialogTitle,
    FormHelperText,
    FormLabel,
    Grid,
    InputLabel,
    makeStyles, Radio,
    RadioGroup,
    TextField,
    DialogActions, List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core";
import React, {useState} from "react";
import {LocalDrink, LocationOn, Restaurant} from "@material-ui/icons";


const useFromStyles = makeStyles((theme) => ({
    root: {},
    item: {padding: 0},
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
export const SendInBlueContactModal = ({open, setOpen, ...rest}) => {
    const classes = useFromStyles();

    const {dinner, drink, location} = rest;
    const [values, setValues] = useState({
        EMAIL: '',
        VISITING: "2",
        VISITING_FROM: '',
        EXPERIENCE: rest.title
    });

    const [loading, setLoading] = useState(false);

    const [showDetails, setShowDetails] = useState(false);

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    const emailError = values.EMAIL && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.EMAIL);

    const submit = async () => {
        if (emailError) {
            return
        }
        setLoading(true);
        var formData = new FormData();

        Object.keys(values).forEach(k => formData.append(k, values[k]));

        await fetch("https://sibforms.com/serve/MUIEAOcRsCQTqqddysTZ4cAPPQrevduL9Fwd3iGOJKRTpcUTQPwaUr8wRnUW6Pn5-PpI6Dx01GJ9r9Luafvt70XZxLTLKwWbj7snupwOlzeVzSENNVeRBWqrVSUiI8ZR6Ws75fnljeMeIynmLGwIUhH23coDDUNXJ4whGqmbBNJM2PTYTV4Mfps_D0YoNKIjyQssaUYcXEAu9Tuq?isAjax=1", {
            method: "POST",
            body: formData
        });
        setLoading(false)
        setShowDetails(true)
    }
    if (showDetails) {
        return (
            <Dialog open={open}
                    onClose={() => setOpen(false)}>
                <DialogTitle>Here is your experience</DialogTitle>
                <DialogContent>
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
                </DialogContent>
            </Dialog>
        )
    }
    return (<Dialog open={open}
                    onClose={() => setOpen(false)}>
        <DialogTitle>Tell us a little bit about yourself</DialogTitle>
        <DialogContent>
            <Grid container direction="column" spacing={2} className={classes.root}>
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

                        {emailError &&
                        <FormHelperText>Invalid email, expected format is abc@xyz.com</FormHelperText>}
                    </FormControl></Grid>
                <Grid item>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend" className={classes.label}>Are you local or
                            visiting?</FormLabel>
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
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="secondary"
                    disabled={loading}
                    onClick={submit}>Receive experience description</Button>
        </DialogActions>
    </Dialog>)
}