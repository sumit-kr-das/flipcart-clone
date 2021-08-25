import { Card,Box,makeStyles,Typography,Button } from "@material-ui/core";
import clsx from "clsx";
import AddIncDecBtn from "./AddIncDecBtn";

const useStyles = makeStyles({
    Component:{
        display:"flex",
        borderRadius:0,
        borderTop:"1px solid #f0f0f0"
    },
    leftComponent:{
        margin:20,
        display:"flex",
        flexDirection:"column"
    },
    rightComponent:{
        marginTop:20
    },
    smallText:{
        fontSize:14
    },
    grayText:{
        color:"#878787"
    },
    price:{
        fontSize:18,
        fontWeight:"bold"
    },
    img:{
        height:110,
        width:110
    },
    remove:{
        margin:"10px 0 20px 0",
        fontSize:16
    }
})

const CartItem = ({item,removeItemFromCart}) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const classes = useStyles();
    return(
        <Card className={classes.Component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} className={classes.img} />
                <AddIncDecBtn/>
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.grayText)} style={{marginTop:"10px"}}>Seller: NextCom
                    <span><img src={fassured} style={{width:50,marginLeft:10}} /></span>
                </Typography>
                <Typography style={{margin:"20px 0"}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.grayText}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:"#388e3c"}}>{item.price.discount} off</span>
                </Typography>
                <Button onClick={()=>removeItemFromCart(item.id)} className={classes.remove}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;