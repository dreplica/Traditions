import { Dispatch } from "redux"; 
import Axios from 'axios'

import { ITEMS } from './../../reusablecomponent/theme/types';
import {isloading, uploading, isError,isData } from './actionfuncs'


export const getRequest = (url: string) => async (dispatch: Dispatch) => {
    console.log("dipatching to fetch")
    try {
        dispatch(isloading())
        const { data } = await Axios.get(`http://localhost:3000/${url}`)
        dispatch(isData(data))
    }
    catch (error) {
        console.log("didnt happen")
        dispatch(isError())
    }
}


export const loadData = (payload: { token: string;isadmin:string|number} ) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch(uploading(payload))
    } catch (error) {
        dispatch(isError())
    }
}
export const checkLocal = () => (dispatch: Dispatch) => {
    let local: ITEMS[] = []
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




export const getItem = (payload: ITEMS[]) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'getItems', payload })
    } catch (error) {
        dispatch(isError())
    }
}

export const getPreview = (payload: ITEMS) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'Preview', payload })
    } catch (error) {
        dispatch(isError())
    }
}


export const addCart = (payload: ITEMS) => (dispatch: Dispatch) => {
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
    value.map((x: { [key: string]: string }) => console.log(typeof x.cartid))

    const local = value.filter((item: ITEMS) => item.cartid !== payload)
    localStorage['cart'] = JSON.stringify(local)
    try {
        dispatch(isloading())
        dispatch({ type: 'removeCart', payload: local })
    } catch (error) {
        dispatch(isError())
    }
}
