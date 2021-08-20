import { Box,makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';

const useStyle = makeStyles({
    component:{
        padding:10,
        backgroundColor:"#f2f2f2"
    }
})

const Home = () =>{
    const classes = useStyle();
    return(
        <>
            <NavBar/>
            <Box className={classes.component}>
            <Banner/>
            </Box>
        </>
    )
}

export default Home;