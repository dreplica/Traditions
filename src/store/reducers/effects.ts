import { actionType } from "../actionCreators/actiontypes";

export interface Modal{
    modal:string;
    menu:string;
}


const modalView :Modal={
    modal:'none',
    menu:'flex'
}


const EffectReducers = (state = modalView,action:actionType) =>{
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