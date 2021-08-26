import React,{useState} from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  withStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import HeaderBtn from "./HeaderBtn";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme=>({
  header: {
    backgroundColor: "#2874F0",
    height: "60px",
    boxShadow: "none",
    position: "fixed",
  },
  logo: {
    width: "100px",
    marginRight: "10px",
  },
  navalign: {
    marginLeft: "10%",
  },
  menubtn: {
    display:"none",
    [theme.breakpoints.down('sm')]:{
      display:"block"
    }
  },
  width:{
    width:250
  },
  custiomButtons:{
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }

  }
}));
const ToolBar = withStyles({
  root: {
    minHeight: 60,
  },
})(Toolbar);


const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () =>{
    setOpen(false);
  }
  const handleOpen = () =>{
    setOpen(true)
  }
  const list = () =>{
    return(
      <Box className={classes.width}>
      <List>
        <listItem button>
          <HeaderBtn/>
        </listItem>
      </List>
    </Box>
    )
  }
  const classes = useStyles();
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png";
  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton color="inherit" className={classes.menubtn} onClick={handleOpen} >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClick={handleClose} >
          {list()}
        </Drawer>
        <Link to="/" className={classes.navalign}>
          <img src={logoUrl} className={classes.logo} />
        </Link>
        <SearchBar />
        <span className={classes.custiomButtons}>
          <HeaderBtn />
        </span>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
