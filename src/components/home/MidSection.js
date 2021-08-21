import {ImageURL} from "../../constants/data";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container:{
        display:"flex",
        margin:"20px 0",
        justifyContent:"space-between"
    }
})

const MidSection = () =>{
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    const classes = useStyles();
    return(
        <>
        <Box className={classes.container}>
            {
                ImageURL.map(img=>(
                    <img src={img} style={{width:"33%"}} />
                ))
            }
        </Box>
            <img src={coronaURL} style={{width:"100%"}} />
        </>
    )
}

export default MidSection;