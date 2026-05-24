import { SET_ERROR_PRODUCTS, SET_LOADING_PRODUCTS, SET_PRODUCTS } from "./ProductsActionType"



export const setproduct =(product)=>{
    return{
        type: SET_PRODUCTS,
        payload: product

    }
}

export const setloading =(status)=>{
    return{
        type: SET_LOADING_PRODUCTS,
        payload: status

    }
}

export const seterror =(error)=>{
    return{
        type: SET_ERROR_PRODUCTS,
        payload: error

    }
}