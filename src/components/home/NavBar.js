import { navData } from "../../constants/data";
import { Box, Typography,makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        textAlign:"center",
        margin: "10px 130px 10px 130px"
    },
    container:{
       
    },
    img:{
        width:64
    },
    text:{
        fontSize:"14px",
        fontWeight:"550"
    }
});

const NavBar = () => {
    const classes = useStyles();
  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <Box className={classes.container}>
          <img src={data.url} className={classes.img} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
