
import * as actiontype from '../constants/productConstant';

export const getProductsReducer = (state={ products: [] },action) =>{
    switch(action.type){
        case actiontype.GET_PRODUCT_SUCCESS : 
            return { products: action.payload }
        case actiontype.GET_PRODUCT_FAIL : 
            return { error: action.payload }
        default: return state;    
    }
}

export const getProductDetailsReducer = (state ={ product: {} },action) =>{
    switch(action.type){
        case actiontype.GET_PRODUCT_DETAIL_SUCCESS:
            return { product: action.payload }
        case actiontype.GET_PRODUCT_DETAIL_FAIL:
            return { error: action.payload }
        default: return state;
    }
}