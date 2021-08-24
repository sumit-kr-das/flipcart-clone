import React from "react";
import { makeStyles, fade, InputBase, alpha } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: "1px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 23%)",
    backgroundColor: "#fff",
    marginLeft: 10,
    width: "200%",
    display: "flex",
    color: "#000",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
    color: "#000",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
  },
  searchicn: {
    color: "#2874F0",
    margin: 5,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}></div>
        <InputBase
          placeholder="Search for products, brands and more"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIcon className={classes.searchicn} />
      </div>
    </div>
  );
};

export default SearchBar;
