import { Dispatch } from "redux";
import { objectData } from "../reducers/items";

export interface action {
    type:string;
    payload?:string|{[key:string]:string},
    modal?:string;
}

const isloading = ():action =>({
    type:'loading',
})

const isError = ():action=>({
    type:'error'
})

const uploading = (payload:action['payload']):action =>({
    type:'uploading',
    payload
})

export const loadData = (payload:action['payload']) => (dispatch:Dispatch) =>{
    try {
        dispatch(isloading())
        dispatch(uploading(payload))
    } catch (error) {
        dispatch(isError())
    } 
}
export const checkLocal =()=> (dispatch:Dispatch) =>{
    try {
        dispatch(isloading())
        dispatch({type:'checkLocal'})
    } catch (error) {
        dispatch(isError())
    } 
}
export const modalView = (arg:action['modal']) => (dispatch:Dispatch) =>{
    try {
        dispatch(isloading())
        dispatch({type:'view',modal:arg})
    } catch (error) {
        dispatch(isError())
    } 
}
export const menuView = (arg:action['modal']) => (dispatch:Dispatch) =>{
    try {
        dispatch(isloading())
        dispatch({type:'menu',modal:arg})
    } catch (error) {
        dispatch(isError())
    } 
}
export const getItem = (payload:objectData[]) => (dispatch:Dispatch) =>{
    try {
        dispatch(isloading())
        dispatch({type:'getItems',payload})
    } catch (error) {
        dispatch(isError())
    } 
}