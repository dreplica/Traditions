import { Dispatch } from "redux"; 
import Axios from 'axios'


import { objectData } from "../reducers/items";
import {isloading, uploading, isError } from './actionfuncs'


export const loadData = (payload: { token: string;isadmin:string|number} ) => (dispatch: Dispatch) => {
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
    console.log("this is local", local)
    localStorage['cart'] = JSON.stringify(local)
    try {
        dispatch(isloading())
        dispatch({ type: 'removeCart', payload: local })
    } catch (error) {
        dispatch(isError())
    }
}