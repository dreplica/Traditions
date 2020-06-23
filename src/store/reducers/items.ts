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
        case "GET_ITEMS":
            return {
                ...state,
                data:action.payload
            }
        case 'Preview':
            return {
                ...state,
                currentItem:action.payload 
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