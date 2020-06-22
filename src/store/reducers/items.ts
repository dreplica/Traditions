import { initialItems } from './../../reusablecomponent/theme/types';
import { actionType } from "../actioncreator/actionfuncs"
import { ITEMS } from "../../reusablecomponent/theme/types"


interface action {
    type: string;
    payload: ITEMS[] | ITEMS | string;
}

export type itemState = {
    data:ITEMS[]; 
    cart:ITEMS[];
    currentItem:ITEMS
}

const intitialState:itemState = {
    data:[initialItems],
    cart:[initialItems],
    currentItem:initialItems
}

const ItemsReducer = (state = intitialState,action:action) =>{
    switch (action.type) {
        case "getItems":
            return {
                ...state,
                data:action.payload
            }
        case 'Preview':
            return {
                ...state,
                currentItem:state.data.filter((item:ITEMS)=>item.id === action.payload)[0] 
            }
        case 'addCart':
            const addcart = action.payload as ITEMS[]
            return {
                ...state,
                cart:[...addcart]
            } 
        case 'removeCart':
            const removecart = action.payload as ITEMS[]
            return {
                ...state,
                cart:[...removecart]
            }
        default:
            return state;
    }
}

export default ItemsReducer