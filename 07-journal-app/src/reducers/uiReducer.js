import { types } from "../types/types"

const initialState = {
    loading:false,
    msgError:null
}
export const uiReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.uiSetError:
            return {
                ...state,
                msgError:action.payload
            }
        case types.removeError:
            return {
                ...state,
                msgError:null
            }
        case types.uiStartLoading:
            console.log('ingresa uiStartLoading');
            return {
                ...state,
                loading:true
            }
        case types.uiFinishLoading:
            console.log('ingresa uiFinishLoading');
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
} 