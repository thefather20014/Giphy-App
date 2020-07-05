import { useState, useEffect } from "react";
import getGits from '../helpers/getGifs';
import PropTypes from 'prop-types';

export const useFetchGifs = ( categories, lim ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGits( categories, lim )
        .then( data => setState({ data: data, loading: false }))
        .catch(err => console.err(err));

    }, [categories, lim]);


    return state;
};

useFetchGifs.propTypes = {
    categories: PropTypes.string.isRequired,
    lim: PropTypes.string.isRequired,
}


