import {action} from '../actionCreators/actiontypes'

export type dataType = {[key:string]:number|string|[]|Array<{[key:string]:object|[]|string}>}
export interface stateData {
    error:boolean|string,
    loading:boolean | string,
    data:dataType
}

const initialState:stateData= {error:false,loading:false,data:{}}

const authenticate = (state = initialState,action:action):stateData =>{
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading:true,
            }
        case 'uploading':
            return {
                ...state,
                data:{...state.data,'auth':action.payload} as dataType,
                loading:false,
            }
        case 'profile':
            return {
                ...state,
                data:{...state.data,user:action.payload} as dataType,
            }
        case 'cart':
            console.log(typeof state.data)
            const cart = (state.data.cart as Array<object>).push(action.payload as object)//.push() //,action.payload]
            return{
                ...state,
                data:{...state.data,cart},
            }
        case 'error':
            return{
                ...state,
                error:true,
            }
        default:
            return state;
    }
}

// authenticate(initialState,{type:'cart'})
export default authenticate;