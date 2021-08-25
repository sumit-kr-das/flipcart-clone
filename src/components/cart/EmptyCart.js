import { Box,makeStyles,Typography,Button } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    components:{
        margin:"80px 140px",
        width:"80%",
        background:"#fff",
        height:"65vh"
    },
    center:{
        textAlign:"center",
        paddingTop:"120px",
        '& > *':{
            marginTop:8,
            fontSize:14,
            color: '#878787'
        }
    },
    image:{
        width:"20%"
    },
    btn:{
        marginTop:20,
        padding:"10px 22px",
        borderRadius:2,
        fontSize:15,
        background:"#2874f0",
        color:"#fff"
    }
})

const EmptyCart = () =>{
    const classes = useStyles();
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const history = useHistory();
    const addItem = () =>{
        history.push("/");
    }
    return(
        <Box className={classes.components}>
            <Box className={classes.center}>
                <img src={emptycarturl} className={classes.image} />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now.</Typography>
                <Button className={classes.btn} onClick={()=>addItem()} >Shop Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart;