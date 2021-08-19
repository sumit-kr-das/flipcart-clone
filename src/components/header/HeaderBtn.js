import React from "react";
import { Button, Box, makeStyles, Typography,Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
  }
});

const HeaderBtn = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Button className={classes.login} variant="contained">
        Login
      </Button>
      <Box>
        <Typography>More</Typography>
      </Box>
      <Box className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:"10px"}}>Cart</Typography>
      </Box>
    </Box>
  );
};

export default HeaderBtn;
