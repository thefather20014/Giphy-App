import React from 'react'
import { Grid } from '@material-ui/core';
import GifGridList from './GifGridList';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({ categories, lim }) => {

 const { data, loading } = useFetchGifs( categories, lim );

    return (
        <>
        { loading ? <h2 className="title">Loading..</h2>:  <h2 className="title"> Topic: { categories } | Limit: { lim } </h2> }
       
             <Grid container>
                {
                    data.map( gif => (
                       <GifGridList key={ gif.id } { ...gif } />
                    ))
                }
            </Grid> 
        </>
    )
}

GifGrid.propTypes = {
    categories: PropTypes.string.isRequired,
    lim: PropTypes.string.isRequired,
}

export default GifGrid;
