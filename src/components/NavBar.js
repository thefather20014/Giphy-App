import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import GifIcon from '@material-ui/icons/Gif';

const useStyles = makeStyles(() => ({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
        boxShadow: '0 3px 5px 2px #000)',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    title: {
        letterSpacing: '5px',
    }
}));


const Nav = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={ classes.root }>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    < GifIcon />  GifExpertApp
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
