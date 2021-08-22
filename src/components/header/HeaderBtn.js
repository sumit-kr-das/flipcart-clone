import React,{useState} from "react";
import { Button, Box, makeStyles, Typography,Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';
import LoginDialog from '../login/Login';


const useStyle = makeStyles({
  login: {
    background: "#fff",
    color: "#2874f0",
    fontWeight: "550",
    textTransform: "none",
    borderRadius: "2px",
    padding: "5px 40px",
    boxShadow:"none"
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: "50px",
    },
  },
  container:{
    display:"flex",
    textDecoration:"none",
    color:"#fff"
  }
});

const HeaderBtn = () => {
  const [open,setOpen] = useState(false);
  const openLoginDialogue = () =>{
    setOpen(true);
  }
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Button onClick={()=>openLoginDialogue()} className={classes.login} variant="contained">
        Login
      </Button>
      <Box>
        <Typography>More</Typography>
      </Box>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:"10px"}}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default HeaderBtn;
