import { action } from "../actionCreators/items";
import { ITEMS } from "../../ReusableComponents/theme/types";

export type itemState = {
  data: ITEMS[];
  cart: ITEMS[];
  currentItem: ITEMS;
};

const state_value: ITEMS = {
  description: "",
  image: "",
  itemname: "",
  id: "",
  price: "",
};

const intitialState: itemState = {
  data: [state_value],
  cart: [state_value],
  currentItem: state_value,
};

const ItemsReducer = (state = intitialState, action: action) => {
  switch (action.type) {
    case "Get items":
      return {
        ...state,
        data: action.payload,
      };
    case "Preview":
      return {
        ...state,
        currentItem: state.data.filter(
          (item: ITEMS) => item.id === action.payload
        )[0],
      };
    case "Add cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "Remove cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case 'Updating_Registragtion':
      return{
        ...state,
        form:{...state.form,payload}
      }
    default:
      return state;
  }
};

export default ItemsReducer;
