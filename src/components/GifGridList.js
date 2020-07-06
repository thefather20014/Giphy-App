import React, { useState } from 'react'
import {
    Grid,
    makeStyles,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
} from '@material-ui/core';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        margin: '20px',
    },
    media: {
        height: '500px',
        paddingTop: '56.25%', // 16:9
        borderRadius: '5px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '5px 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '10px',
        animation: 'animate__animated animate__bounce'
    },
    space: {
        marginRight: '10px',
    }
}));

const GifGridList = ({ id, image, title }) => {

    const classes = useStyles();
    const [likes, setLikes] = useState(0);
    const [disLike, setdisLike] = useState(0);

    return (
        <Grid item xs={12} sm={6} md={4} xl={3} key={id}>
            <Card className={classes.root}>

                <CardMedia
                    className={`${classes.media}`}
                    image={image}
                    loading="lazy"
                />

                <CardContent>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {title}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <Button variant="contained" fullWidth className={classes.btn} onClick={ () => setLikes(likes + 1) }>
                        <ThumbUpAltIcon className={ classes.space }/>  { likes }
                    </Button>
                    <Button variant="contained" fullWidth className={classes.btn} onClick={ () => setdisLike(disLike + 1) }>
                        <ThumbDownIcon className={ classes.space }/> { disLike }
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

GifGridList.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default GifGridList;
