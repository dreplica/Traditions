import { actionType } from "../actioncreator/actiontypes"

export type objectData = {[key:string]:string}

export type itemState = {
    data:objectData[]; 
    cart:objectData[];
    currentItem:objectData
}

const intitialState:itemState = {
    data:[{}],
    cart:[{}],
    currentItem:{}
}

const ItemsReducer = (state = intitialState,action:actionType) =>{
    switch (action.type) {
        case "getItems":
            return {
                ...state,
                data:action.payload
            }
        case 'Preview':
            return {
                ...state,
                currentItem:state.data.filter((item:objectData)=>item.id === action.payload)[0] 
            }
        case 'addCart':
            const addcart = action.payload as objectData[]
            return {
                ...state,
                cart:[...addcart]
            }
        case 'removeCart':
            const removecart = action.payload as objectData[]
            return {
                ...state,
                cart:[...removecart]
            }
        default:
            return state;
    }
}

export default ItemsReducer