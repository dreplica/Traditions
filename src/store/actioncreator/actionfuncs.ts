import { ITEMS } from './../../reusablecomponent/theme/types';

export interface actionType {
    type: string;
    payload?: string | { [key: string]: string };
    modal?: string;
}

export const isloading = () => ({
    type: 'loading',
})

export const isError = (payload?:string) => ({
    type: 'error',
    payload
})

export const uploading = (payload: { token?: string; isadmin?:number|string}) => ({
    type: 'uploading',
    payload 
})


export const isData = (payload: ITEMS[]) => ({
    type: "GET_ITEMS",
    payload
})

export const signOut = ()=>({
    type:"SIGN_OUT"
})