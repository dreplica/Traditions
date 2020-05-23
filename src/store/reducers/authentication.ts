import {Auth_Action } from "../actionCreators/authenticate";

export interface Auth {
  token: string;
  admin: string | boolean;
}
export interface stateData {
  error: boolean | string;
  loading: boolean | string;
  auth: Auth;
}

const initialState: stateData = {
  error: false,
  loading: false,
  auth: { token: "", admin: "" },
};

const authenticate = (state = initialState, action: Auth_Action): stateData => {
  const { payload } = action;
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "uploading":
      localStorage["auth"] = JSON.stringify(payload);
      return {
        ...state,
        auth: {
          token: payload.token,
          admin: payload.admin,
        },
        loading: false,
      };
    case "Check local":
      return {
        ...state,
        auth: {
          ...state.auth,
          admin: payload.admin,
          token: payload.token,
        },
        loading: false,
      };
    case "logout":
      delete localStorage["auth"];
      return {
        ...state,
        auth: { admin: "", token: "" },
      };
    // case "profile":
    //   return {
    //     ...state,
    //     data: { ...state.data, user: action.payload },
    //   };
    case "error":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

// authenticate(initialState,{type:'cart'})
export default authenticate;
