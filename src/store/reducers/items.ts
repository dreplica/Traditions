import { action } from "../actionCreators/items";
import { ITEMS, SIGNUP_FORM } from "../../ReusableComponents/theme/types";

export type itemState = {
  data: ITEMS[];
  cart: ITEMS[];
  currentItem: ITEMS;
  reg_form:SIGNUP_FORM
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
  reg_form:SIGNUP_FORM
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
        reg_form:{...state.reg_form, ...action.reg_payload}
      }
    default:
      return state;
  }
};

export default ItemsReducer;
