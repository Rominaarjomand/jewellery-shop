import { DECREMENT_COUNTER,INCREMENT_COUNTER,RESET_COUNTER } from "./CounterActionType";

export const incrementcounter=(productId)=>{
    return{
        type: INCREMENT_COUNTER,
        payload: productId
    }
}


export const decrementcounter=(productId)=>{
   return{
    type: DECREMENT_COUNTER,
    payload: productId
   }
}


export const resetcounter=(productId)=>{
    return{
        type: RESET_COUNTER,
        payload: productId
    }
}
