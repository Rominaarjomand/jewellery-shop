import { SET_MENU, SET_ERROR, SET_LOADING } from "./MenuActionType"



export const setmenu =(menus)=>{
    return{
        type: SET_MENU,
        payload: menus

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