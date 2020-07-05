import React, { useState } from 'react'
import { Button, TextField, makeStyles, MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    root: {
        margin: '10px 0',
    },

    btn: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        margin: '10px 0',
    },

}));


const AddCategory = ({ setCategories, setLim }) => {

    const classes = useStyles();

    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState('12');
    const limits = ['12' ,'15', '30', '50', '70', '90', '100'];

    const onSubmit = e => {
        e.preventDefault();
        if (search.trim().length !== 0) {
            setCategories(search);
            setLim(limit);
            setSearch('');
            setLimit('12');
        }
        else {
            alert('Enter Something!🤦‍♂️');
        }
    };

    const onHandleInput= e => setSearch(e.target.value);
    const onHandleSelect = e => setLimit(e.target.value);

    return (
        <form onSubmit={onSubmit}>

            <TextField
                id=""
                label="Search🔍"
                type="text"
                name="search"
                onChange={onHandleInput}
                value={search}
                fullWidth
            />

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={limit}
                onChange={onHandleSelect}
                fullWidth
                className={classes.root}
            >
            { limits.map( lim => <MenuItem value={lim} key={ lim }> { lim } </MenuItem> ) }
                
            </Select>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.btn}>
                Add
            </Button>

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    setLim: PropTypes.func.isRequired,
} 

export default AddCategory;
