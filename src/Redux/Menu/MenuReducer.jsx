import { SET_MENU, SET_ERROR, SET_LOADING } from "./MenuActionType"


let initialstate ={
    menus:[],
    loading: true,
    error:""
}

const MenuReducer =(state=initialstate,action)=>{
    switch (action.type) {
        case SET_MENU:{
            return{...state,menus:action.payload}
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

export default MenuReducer