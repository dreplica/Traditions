import { Dispatch } from "redux";

export interface action {
    type:string;
    payload?:string|{[key:string]:string}
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