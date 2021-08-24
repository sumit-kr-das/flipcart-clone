import React,{useState} from 'react';
import { Typography,Menu,MenuItem,makeStyles } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component :{
        marginTop:40
    },
    links:{
        color:"#fff"
    }
})

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () =>{
        setOpen(false);
    }
    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }
    const logout = () =>{
        setAccount("");
    }
    const classes = useStyle();
  return (
    <>
      <Link className={classes.links} ><Typography onClick={handleClick} >{account}</Typography></Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      > 
        <MenuItem onClick={()=>{handleClose(); logout()}}>
            <ExitToAppIcon fontSize="small" color="primary" />Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
