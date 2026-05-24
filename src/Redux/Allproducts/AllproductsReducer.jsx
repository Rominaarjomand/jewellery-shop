import { SET_ERROR, SET_LOADING, SET_NEW } from "./AllproductsActionType"


let initialstate ={
    allproduct:[],
    loading: true,
    error:""
}

const AllproductsReducer =(state=initialstate,action)=>{
    switch (action.type) {
        case SET_NEW:{
            return{...state,allproduct:action.payload}
        }
            
        case SET_LOADING:{
            return{...state,loading:action.payload}
        }

        case SET_ERROR:{
            return{...state,error:action.payload}
        }
        default:{
            return state
        }
    }
}

export default AllproductsReducer