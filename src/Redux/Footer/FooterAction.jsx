import { SET_ERROR_FOOTER, SET_FOOTER, SET_LOADING_FOOTER } from "./FooterActionType"




export const setfooter =(footer)=>{
    return{
        type: SET_FOOTER,
        payload: footer

    }
}

export const setloadingfooter =(status)=>{
    return{
        type: SET_LOADING_FOOTER,
        payload: status

    }
}

export const seterrorfooter =(error)=>{
    return{
        type: SET_ERROR_FOOTER,
        payload: error

    }
}