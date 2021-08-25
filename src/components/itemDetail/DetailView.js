import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/constants/productActions";
import { Box, makeStyles, Typography,Grid,Table,TableCell,TableBody,TableRow } from "@material-ui/core";
import clsx from 'clsx';
import LocalOfferIcon  from '@material-ui/icons/LocalOffer';
import ActionItem from "./ActionItem";

const useStyle = makeStyles(theme => ({
  component: {
      // marginTop: 55,
      background: '#F2F2F2'
  },
  container: {
      background: '#FFFFFF',
      // margin: '0 80px',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
          margin: 0
      }
  },
  rightContainer: {
      marginTop: 50,
      '& > *': {
          marginTop: 10
      }
  },
  price: {
      fontSize: 28
  },
  smallText: {
      fontSize: 14,
      verticalAlign:"baseline",
      "& > *":{
        fontSize: 14,
        marginTop:10
      }
  },
  greyTextColor: {
      color: '#878787'
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color:"#00cc00"
  }
}));

const DetailView = ({ match }) => {
  const classes = useStyle();
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const { product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]); 
 
  const date = new Date (new Date().getTime() + ( 5 * 24 * 60 * 60 * 1000));
  return (
    <Box className={classes.component}>
        <Box></Box>
        { product && Object.keys(product).length &&
            <Grid container className={classes.container}> 
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product} />
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                        8 Ratings & 1 Reviews
                        <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <Typography style={{marginTop:20,fontWeight:600}}>Available offers</Typography>
                    <Box>
                        <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer10% off on ICICI Bank Cards, up to ₹300. On orders of ₹1750 and above</Typography>
                        <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                        <Typography><LocalOfferIcon className={classes.badge}/>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik</Typography>
                        <Typography><LocalOfferIcon className={classes.badge}/>Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%See all products</Typography>
                    </Box>

                    <Table>
                      <TableBody>
                        <TableRow className={classes.smallText}>
                          <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                          <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                          <TableCell className={classes.greyTextColor}>Warrenty</TableCell>
                          <TableCell>No Warrenty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                          <TableCell className={classes.greyTextColor}>Seller</TableCell>
                          <TableCell className={classes.smallText}>
                            <span style={{color:"#2874f0"}}>NextComSumit</span>
                            <Typography>GST invoice Available</Typography>
                            <Typography>7 Days Return Ploicy</Typography>
                            <Typography>View more sellors starting from ₹300</Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                          <TableCell colSpan={2}>
                            <img src={sellerURL} style={{width:"390px"}} />
                            </TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                          <TableCell className={classes.greyTextColor}>Description</TableCell>
                          <TableCell>{product.description}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                </Grid>
            </Grid>
        }   
    </Box>
)
}

export default DetailView;