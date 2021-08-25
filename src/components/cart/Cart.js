import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import CartItem from "./CartItem";
import { removeFromCartID } from "../../redux/actions/CartActions";
import EmptyCart from "./EmptyCart";
import RightComponent from "./RightComponent";

const useStyles = makeStyles({
  component: {
    padding: "30px 135px",
    display:"flex"
  },
  leftComponent: {
    width: "67%",
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
});

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
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
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
          </Box>
          <RightComponent cartItems={cartItems} />
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;
