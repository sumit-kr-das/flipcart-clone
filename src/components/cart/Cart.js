import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles, Typography, Button,Grid } from "@material-ui/core";
import CartItem from "./CartItem";
import { removeFromCartID } from "../../redux/actions/CartActions";
import EmptyCart from "./EmptyCart";
import RightComponent from "./RightComponent";

const useStyles = makeStyles(theme=>({
  component: {
    padding: "30px 135px",
    display:"flex",
    [theme.breakpoints.down('sm')]:{
      padding:"15px 0"
    }
  },
  leftComponent: {
    // width: "67%",
    [theme.breakpoints.down('sm')]:{
      marginBotton:"15px"
    }
  },
  rightComponent: {},
  header: {
    padding: "15px 24px",
  },
  placeOrder:{
    background:"#fb641b",
    color:"#fff",
    borderRadius:2,
    width:250,
    height:50,
    display:"flex",
    marginLeft:"auto"
  },
  bottom:{
    padding:"16px 22px",
    backgroundColor:"#fff",
    borderTop:"1px solid #f0f0f0",
    boxShadow:"0 -2px 10px 0 rgb(0 0 0/10%)"
  }
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  //remove cart
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCartID(id));
  };
  //end
  useEffect(() => {});
  const classes = useStyles();
  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid item lg={9} md={9} gm={12} xs={12} className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
                <Button className={classes.placeOrder} variant="contained">Place Order</Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} gm={12} xs={12} >
            <RightComponent cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;
