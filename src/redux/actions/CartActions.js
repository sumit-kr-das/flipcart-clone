import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

const url = "http://localhost:8000";

export const AddToCart = (id) => async (dispatch) =>{
    try{
        const {data} = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
    }catch(err){
        console.log("Error while calling add to cart api",err.message);
    }
}

export const removeFromCartID = (id)=>(dispatch) =>{
    dispatch({ type:actionTypes.REMOVE_FROM_CART, payload:id});
}

