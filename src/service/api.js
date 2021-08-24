import axios from 'axios';

const url = "http://localhost:8000";

export const authiencateSignup = async (user) =>{
    try{
        return await axios.post(`${url}/signup`,user);
    }catch(err){
        console.log("Error while colling signup api frontend",err);
    }
}

export const authiencateLogin = async (user) =>{
    try{
        return await axios.post(`${url}/login`,user);
    }catch(err){
        console.log("Error while colling login api frontend",err);
    }
}