import { Dispatch } from "redux";
import { isloading, isError } from "./actiontypes";
import { ITEMS } from "../../ReusableComponents/theme/types";

export interface Auth_Action {
  type: "loading" | "uploading" | "Check local" | "logout" | "error";
  payload: {
    admin: string | boolean;
    token: string;
  };
}

export const loadData = (payload: Auth_Action["payload"]) => (
  dispatch: Dispatch
) => {
  try {
    dispatch(isloading());
    dispatch({ type: "uploading", payload });
  } catch (error) {
    dispatch(isError());
  }
};

export const checkLocal = () => (dispatch: Dispatch) => {
  try {
    const local: ITEMS = JSON.parse(localStorage["cart"]);
    const Auth: Auth_Action["payload"] = JSON.parse(localStorage["auth"]);
    dispatch(isloading());
    dispatch({ type: "addCart", payload: local });
    dispatch({ type: "Check local", payload: Auth });
  } catch (error) {
    dispatch(isError());
  }
};
