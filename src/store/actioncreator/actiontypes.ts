import { Dispatch } from "redux"; 
import Axios from 'axios'


import { objectData } from "../reducers/items";
import { actionType, isloading, uploading, isError } from './actionfuncs'
import { SIGNUP_FORM } from "../../reusablecomponent/theme/types";


export const loadData = (payload: actionType['payload']) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch(uploading(payload))
    } catch (error) {
        dispatch(isError())
    }
}
export const checkLocal = () => (dispatch: Dispatch) => {
    let local: objectData[] = []
    if (localStorage['cart']) {
        const value = JSON.parse(localStorage['cart'])
        local = [...value]
    }
    try {
        dispatch(isloading())
        dispatch({ type: 'addCart', payload: local })
        dispatch({ type: 'checkLocal' })
    } catch (error) {
        dispatch(isError())
    }
}


export const modalView = (arg: actionType['modal']) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'view', modal: arg })
    } catch (error) {
        dispatch(isError())
    }
}


export const menuView = (arg: actionType['modal']) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'menu', modal: arg })
    } catch (error) {
        dispatch(isError())
    }
}


export const getItem = (payload: objectData[]) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'getItems', payload })
    } catch (error) {
        dispatch(isError())
    }
}

export const getPreview = (payload: string) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'Preview', payload })
    } catch (error) {
        dispatch(isError())
    }
}


export const addCart = (payload: objectData) => (dispatch: Dispatch) => {
    let local = []
    if (localStorage['cart']) {
        const value = JSON.parse(localStorage['cart']);
        local = [...value, { ...payload, cartid: "c" + value.length as string }];
        localStorage['cart'] = JSON.stringify(local)
    }
    else {
        local.push(payload)
        localStorage['cart'] = JSON.stringify([{ ...payload, cartid: " c0" }]);
    }
    try {
        dispatch(isloading())
        dispatch({ type: 'addCart', payload: local })
    } catch (error) {
        dispatch(isError())
    }
}
export const removeCart = (payload: string) => (dispatch: Dispatch) => {
    const value = JSON.parse(localStorage['cart'])
    console.log("thuis is paulosad", payload)
    value.map((x: { [key: string]: string }) => console.log(typeof x.cartid))
    const local = value.filter((item: objectData) => item.cartid !== payload)
    console.log("thgis is local", local)
    localStorage['cart'] = JSON.stringify(local)
    try {
        dispatch(isloading())
        dispatch({ type: 'removeCart', payload: local })
    } catch (error) {
        dispatch(isError())
    }
}


export const registrationFrom = (reg_payload: SIGNUP_FORM) => (dispatch: Dispatch) => {
    try {
        console.log(reg_payload)
        dispatch(isloading())

        Axios.post('http://localhost:3000/signup',reg_payload)

        dispatch({ type: "Updating_Registration", reg_payload })

    } catch (error) {
        dispatch(isError())
    }
} 