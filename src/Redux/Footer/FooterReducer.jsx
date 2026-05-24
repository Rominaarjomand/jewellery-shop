import { SET_ERROR_FOOTER, SET_FOOTER, SET_LOADING_FOOTER } from "./FooterActionType"



let initialstate ={
    footer:[],
    loading: true,
    error:""
}

const FooterReducer =(state=initialstate,action)=>{
    switch (action.type) {
        case SET_FOOTER:{
            return{...state,footer:action.payload}
        }
            
        case SET_LOADING_FOOTER:{
            return{...state,loading:action.payload}
        }

        case SET_ERROR_FOOTER:{
            return{...state,error:action.payload}
        }
        default:{
            return state
        }
    }
}

export default FooterReducer