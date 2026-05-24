import { SET_ERROR, SET_LOADING, SET_NEW } from "./AllproductsActionType"




export const setnew =(allproduct) =>{
    return{
        type: SET_NEW,
        payload: allproduct

    }
}

export const setloading =(status)=>{
    return{
        type: SET_LOADING,
        payload: status

    }
}

export const seterror =(error)=>{
    return{
        type: SET_ERROR,
        payload: error

    }
}