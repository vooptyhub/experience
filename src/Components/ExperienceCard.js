import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    card: {
        width: 345,
    },
    media: {
        height: 140,
    },
});

export const ExperienceCard = ({title, image, description, path}) => {
    const classes = useStyles();

    return (
        <Link to={path} style={{textDecoration: 'none', display: 'block'}}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}