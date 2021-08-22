import {useState} from 'react';
import { Box,Dialog,DialogContent,makeStyles,Typography,TextField,Button } from "@material-ui/core";

const useStyle = makeStyles({
    component:{
        height:"70vh",
        width:"90vh"
    },
    img:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:"70vh",
        backgroundRepeat:"no-repeat",
        background:"#2874f0",
        width:"40%",
        backgroundPosition:"center 85%",
        padding:"47px 35px",
        "& > *":{
            color:"#ffffff",
            fontWeight:"bold"
        }
    },
    login:{
        padding:"25px 35px",
        display:"flex",
        flex:1,
        flexDirection:"column",
        "& > *":{
            marginTop:"20px"
        }
    },
    text:{
        color:"#878787",
        fontSize:"12px"
    },
    loginBtn:{
        textTransform:"none",
        background:"#fb641b",
        color:"#ffffff",
        height:"48px",
        borderRadius:2
    },
    reqBtn:{
        textTransform:"none",
        background:"#ffffff",
        color:"#2874f0",
        height:"48px",
        borderRadius:2,
        boxShadow:"0 2px 4px 0 rgba(0 0 0 / 20%)"
    },
    createTxt:{
        textAlign:"center",
        marginTop:"auto",
        fontSize:"14px",
        color:"#2874f0",
        fontWeight:600,
        cursor:"pointer"
    }
});

const initialVlaue={
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here!",
        subHeading:"Signup with your mobile number to get started"
    }
};

const Login = ({open,setOpen}) =>{
    const classes = useStyle();
    console.log(initialVlaue.login);
    const [account,setAccount] = useState(initialVlaue.login);
    const handleClose = () =>{
        setOpen(false);
        setAccount(initialVlaue.login);
    }
    const loginToggle = () =>{
        setAccount(initialVlaue.signup);
    }
    return(
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.component}>
                <Box style={{display:"flex"}}>
                    <Box className={classes.img}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:"20px"}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login'?
                        <Box className={classes.login} >
                        <TextField name="username" label="Enter Email/Mobile number" />
                        <TextField name="password" label="Enter Password" />
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign:"center"}} className={classes.text}>OR</Typography>
                        <Button variant="contained" className={classes.reqBtn}>Request OTP</Button>
                        <Typography onClick={loginToggle} className={classes.createTxt}>New to Flipkart? Create an account</Typography>
                    </Box> :
                     <Box className={classes.login} >
                         <TextField name="firstname" label="Enter Firstname" />
                         <TextField name="lastname" label="Enter Lastname" />
                         <TextField name="username" label="Enter Username" />
                         <TextField name="email" label="Enter Email" />
                         <TextField name="password" label="Enter Password" />
                         <TextField name="phone" label="Enter Phone number" />
                         <Button variant="contained" className={classes.loginBtn}>Signup</Button>
                    </Box>
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;