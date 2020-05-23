import { action } from "../actionCreators/effects";

export interface Modal{
    modal:string;
    menu:string;
}


const modalView :Modal={
    modal:'none',
    menu:'flex'
}


const EffectReducers = (state = modalView,action:action) =>{
    switch (action.type) {
        case "view":
            return{
                ...state,
                modal:action.payload,
                // data:action.payload
            }
        case "menu":
            return{
                ...state,
                menu:action.payload,
                // data:action.payload
            }
    
        default:
            return state;
    }
}

export default EffectReducers