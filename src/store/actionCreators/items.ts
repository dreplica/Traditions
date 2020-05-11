import { Dispatch } from "redux";

import { isloading, isError } from "./actiontypes";
import { ITEMS } from "../../ReusableComponents/theme/types";

export interface action {
  type: "Get items" | "Preview" | "Add cart"|"Remove cart";
  payload:ITEMS[]|string;
}

export const getItem = (payload: ITEMS[]) => (dispatch: Dispatch) => {
  try {
    dispatch(isloading());
    dispatch({ type: "Get items", payload });
  } catch (error) {
    dispatch(isError());
  }
};

export const getPreview = (payload: string) => (dispatch: Dispatch) => {
  try {
    dispatch(isloading());
    dispatch({ type: "Preview", payload });
  } catch (error) {
    dispatch(isError());
  }
};

export const addCart = (payload: ITEMS) => (dispatch: Dispatch) => {
  if(!localStorage['cart']){
      localStorage['cart'] = JSON.stringify([])
  }
  try {
    const cart = JSON.parse(localStorage["cart"])
    localStorage["cart"]  = JSON.stringify(cart.push(payload))
    dispatch(isloading());
    dispatch({ type: "Add cart", payload });
  } catch (error) {
    dispatch(isError());
  }
};

export const removeCart = (payload:ITEMS) =>(dispatch:Dispatch)=>{
    try {
      dispatch(isloading());
      dispatch({ type: "Remove cart", payload });
    } catch (error) {
      dispatch(isError());
    }
}