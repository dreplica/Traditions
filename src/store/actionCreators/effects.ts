import { Dispatch } from "redux";

import { isloading, isError } from "./actiontypes";

export interface action {
  type: "view" | "menu";
  payload: "none" | "flex"|"block";
}

export const modalView = (arg: action["payload"]) => (dispatch: Dispatch) => {
  try {
    dispatch(isloading());
    dispatch({ type: "view", payload: arg });
  } catch (error) {
    dispatch(isError());
  }
};

export const menuView = (arg: action["payload"]) => (dispatch: Dispatch) => {
  try {
    dispatch(isloading());
    dispatch({ type: "menu", payload: arg });
  } catch (error) {
    dispatch(isError());
  }
};
