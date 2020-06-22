import { Dispatch } from 'redux';
import { isloading, isError } from './actionfuncs'



export const modalView = (arg: string) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'view', modal: arg })
    } catch (error) {
        dispatch(isError())
    }
}


export const menuView = (arg: string) => (dispatch: Dispatch) => {
    try {
        dispatch(isloading())
        dispatch({ type: 'menu', modal: arg })
    } catch (error) {
        dispatch(isError())
    }
}

export default {}
