import { Dispatch } from "redux";
import { ITEMS } from "../../ReusableComponents/theme/types";

export interface action {
  type: string;
  payload?: string | ITEMS;
  modal?: string;
}

export const isloading = (): action => ({
  type: "loading",
});

export const isError = (): action => ({
  type: "error",
});

export const checkLocal = () => (dispatch: Dispatch) => {
  try {
    const local = JSON.parse(localStorage["cart"]);
    dispatch(isloading());
    dispatch({ type: "addCart", payload: local });
    dispatch({ type: "checkLocal" });
  } catch (error) {
    dispatch(isError());
  }
};

export const modalView = (arg: action["modal"]) => (dispatch: Dispatch) => {
  try {
    dispatch(isloading());
    dispatch({ type: "view", modal: arg });
  } catch (error) {
    dispatch(isError());
  }
};

export const menuView = (arg: action["modal"]) => (dispatch: Dispatch) => {
  try {
    dispatch(isloading());
    dispatch({ type: "menu", modal: arg });
  } catch (error) {
    dispatch(isError());
  }
};
