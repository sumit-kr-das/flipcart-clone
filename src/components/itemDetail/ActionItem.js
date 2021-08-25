import { Box ,Button, makeStyles} from "@material-ui/core";
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const useStyles = makeStyles({
    leftContainer:{
        padding:"40px 0 0 80px"
    },
    image:{
        padding:"15px 20px",
        width:"95%"
    },
    Button:{
        height:50,
        width:"46%"
    },
    addToCart:{
        background:"#ff9f00",
        color:"#fff",
        marginRight:"10px",
        borderRadius:"2px"
    },
    buyNow:{
        background:"#fb641b",
        color:"#fff",
        borderRadius:"2px"
    }
});

const ActionItem = ({product}) =>{
    const classes = useStyles();
    return(
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} />
            <Button variant="contained" className={clsx(classes.Button,classes.addToCart)}><ShoppingCartIcon/>Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.Button,classes.buyNow)}><FlashOnIcon/>Buy Now</Button>
        </Box>
    )
}

export default ActionItem;