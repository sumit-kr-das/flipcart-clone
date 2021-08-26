import {ImageURL} from "../../constants/data";
import { makeStyles,Grid } from "@material-ui/core";


const useStyles = makeStyles(theme=>({
    container:{
        display:"flex",
        margin:"20px 0",
        justifyContent:"space-between"
    },
    help:{
        [theme.breakpoints.down('md')]:{
            objectFit:"cover",
            height:120
        }
    }
}));

const MidSection = () =>{
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    const classes = useStyles();
    return(
        <>
        <Grid lg={12} sm={12} md={12} xs={12} container className={classes.container}>
            {
                ImageURL.map(img=>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={img} style={{width:"100%"}} />
                    </Grid>
                ))
            }
        </Grid>
            <img src={coronaURL} style={{width:"100%"}} className={classes.help} />
        </>
    )
}

export default MidSection;