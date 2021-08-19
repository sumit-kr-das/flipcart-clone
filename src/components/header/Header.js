import React from "react";
import { AppBar, Toolbar, makeStyles,withStyles } from "@material-ui/core";
import SearchBar from "./SearchBar";
import HeaderBtn from "./HeaderBtn";

const useStyles = makeStyles({
  header: {
      backgroundColor:"#2874F0",
      height:"60px",
      boxShadow:"none"
  },
  logo:{
      width:"100px",
      marginLeft:"12%"
  }
});
const ToolBar = withStyles({
    root: {
        minHeight: 60
    }
})(Toolbar);

const Header = () => {
  const classes = useStyles();
  const logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png";
  return (
    <AppBar className={classes.header}>
      <ToolBar>
          <img src={logoUrl} className={classes.logo} />
          <SearchBar/>
          <HeaderBtn/>
      </ToolBar>
    </AppBar>
  );
};

export default Header;