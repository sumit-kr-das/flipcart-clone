import {useState} from 'react';
import { Box,Dialog,DialogContent,makeStyles,Typography,TextField,Button } from "@material-ui/core";
import { authiencateLogin,authiencateSignup } from '../../service/api';

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
    },
    error:{
        fontSize:"10px",
        color:"#ff6161",
        marginTop:2
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

const initialValue={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
};

const loginInitialVal={
    username:"",
    password:"",
};

const Login = ({open,setOpen,setAccount}) =>{
    const [user,setUser] = useState(initialValue);
    const {firstname,lastname,username,email,password,phone} = user;
    //login to
    const [login,setLogin] = useState(loginInitialVal);
    const [loginerr,setLoginerr] = useState(false);
    //login end
    const classes = useStyle();
    console.log(initialVlaue.login);
    const [account,toggleAccount] = useState(initialVlaue.login);
    const handleClose = () =>{
        setOpen(false);
        toggleAccount(initialVlaue.login);
    }
    const loginToggle = () =>{
        toggleAccount(initialVlaue.signup);
    }
    const onInputChenge = (e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }
    const signupUser = async () =>{
        let response = await authiencateSignup(user);
        if(!response) return;
        handleClose();
        setAccount(user.username); 
    }
    // login
    const onLoginChenge = (e) =>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    const loginUser = async () =>{
        let res = await authiencateLogin(login);
        if(!res){
            setLoginerr(true);
            return;
        };
        handleClose();
        setAccount(login.username);
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
                        <TextField onChange={(e)=>onLoginChenge(e)}  name="username" label="Enter Email/Mobile number" />
                        <TextField onChange={(e)=>onLoginChenge(e)} name="password" label="Enter Password" />
                        { loginerr && <Typography className={classes.error} >Invalid Username/Password</Typography> }
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button onClick={()=>loginUser()} variant="contained" className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign:"center"}} className={classes.text}>OR</Typography>
                        <Button variant="contained" className={classes.reqBtn}>Request OTP</Button>
                        <Typography onClick={()=>loginToggle()} className={classes.createTxt}>New to Flipkart? Create an account</Typography>
                    </Box> :
                     <Box className={classes.login} >
                         <TextField onChange={(e)=>onInputChenge(e)} name="firstname" label="Enter Firstname" />
                         <TextField onChange={(e)=>onInputChenge(e)} name="lastname" label="Enter Lastname" />
                         <TextField onChange={(e)=>onInputChenge(e)} name="username" label="Enter Username" />
                         <TextField onChange={(e)=>onInputChenge(e)} name="email" label="Enter Email" />
                         <TextField onChange={(e)=>onInputChenge(e)} name="password" label="Enter Password" />
                         <TextField onChange={(e)=>onInputChenge(e)} name="phone" label="Enter Phone number" />
                         <Button onClick={signupUser} variant="contained" className={classes.loginBtn}>Signup</Button>
                    </Box>
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;