import { Dispatch } from 'redux';
import Axios from 'axios'
import {isloading, uploading, isError,signOut } from './actionfuncs'
import { SIGNUP_FORM } from '../../reusablecomponent/theme/types'



export const registrationFrom = (reg_payload: SIGNUP_FORM) => async (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        const { data } = await Axios.post('http://localhost:3000/signup', reg_payload)
        if (data.error) {
            return dispatch(isError(data.error))
        }
        dispatch(uploading(data))
    } catch (error) {
        dispatch(isError())
    }
}

export const login = (payload: { email: string; password: string }) => async (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        const { data } = await Axios.post('http://localhost:3000/signin', payload)
        if (data.error) {
            return dispatch(isError(data.error))
        }
        dispatch(uploading(data))
    } catch (error) {
        dispatch(isError())
    }
} 


export const logout = () =>(dispatch:Dispatch)=>{
    delete localStorage['auth'];
    dispatch(signOut())
}

export default {}