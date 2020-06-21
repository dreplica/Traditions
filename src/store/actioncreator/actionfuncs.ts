import { objectData } from "../reducers/items"

export interface actionType {
    type: string;
    payload?: string | { [key: string]: string } | objectData[],
    modal?: string;
}

export const isloading = () => ({
    type: 'loading',
})

export const isError = () => ({
    type: 'error'
})

export const uploading = (payload: { token: string;isadmin:number|string}) => ({
    type: 'uploading',
    payload 
})
