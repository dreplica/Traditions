

type objectData = {[key:string]:string}

type itemState = {
    data:objectData[];
    cart:objectData[];
    currentItem:objectData
}

const intitialState:itemState = {
    data:[{}],
    cart:[{}],
    currentItem:{}
}

const ItemsReducer = (state:intitialState,action) =>{
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
        case 'Cart':
            const cart = JSON.parse(localStorage['cart']);
            return {
                ...state,
                cart:cart
            }
        default:
            return state;
    }
}

export default ItemsReducer