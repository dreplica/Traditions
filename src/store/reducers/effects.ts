import { action } from "../actionCreators/actiontypes";

export interface Modal{
    modal:string;
    menu:string;
}


const modalView :Modal={
    modal:'none',
    menu:'block'
}


const EffectReducers = (state = modalView,action:action) =>{
    switch (action.type) {
        case "view":
            return{
                ...state,
                modal:action.modal,
                // data:action.payload
            }
        case "menu":
            return{
                ...state,
                menu:action.modal,
                // data:action.payload
            }
    
        default:
            return state;
    }
}

export default EffectReducers