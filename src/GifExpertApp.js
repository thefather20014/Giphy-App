import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import NavBar from './components/NavBar';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState('gif');
    const [lim, setLim] = useState('12');

    return (
        <>
            <NavBar />
            <AddCategory setCategories={ setCategories } setLim={ setLim }/>
            <hr />

            <GifGrid categories={ categories } lim={ lim }/> 
            
        </>
    )
}

export default GifExpertApp;
