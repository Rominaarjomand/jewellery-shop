import { SET_ERROR_PRODUCTS, SET_LOADING_PRODUCTS, SET_PRODUCTS } from "./ProductsActionType"



let initialstate ={
    product:[],
    loading: true,
    error:""
}

const ProductsReducer =(state=initialstate,action)=>{
    switch (action.type) {
        case SET_PRODUCTS:{
            return{...state,product:action.payload}
        }
            
        case SET_LOADING_PRODUCTS:{
            return{...state,loading:action.payload}
        }

        case SET_ERROR_PRODUCTS:{
            return{...state,error:action.payload}
        }
        default:{
            return state
        }
    }
}

export default ProductsReducer