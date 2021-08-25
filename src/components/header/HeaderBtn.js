import React, { useState,useContext } from "react";
import { Button, Box, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import LoginDialog from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  login: {
    background: "#fff",
    color: "#2874f0",
    fontWeight: "550",
    textTransform: "none",
    borderRadius: "2px",
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: "50px",
      textDecoration:"none"
    },
  },
  container: {
    display: "flex",
    textDecoration: "none",
    color: "#fff",
  },
  more: {
    color:"#ffffff"
  }
});

const HeaderBtn = () => {
  const [open, setOpen] = useState(false);
  const {account,setAccount} = useContext(LoginContext);

  const { cartItems } = useSelector(state=>state.cart);

  const openLoginDialogue = () => {
    setOpen(true);
  };
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      { account ? <Profile account={account} setAccount={setAccount} /> :
        <Link>
          <Button
            onClick={() => openLoginDialogue()}
            className={classes.login}
            variant="contained"
          >
            Login
          </Button>
        </Link>
      }
      <Link>
        <Typography className={classes.more}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderBtn;
