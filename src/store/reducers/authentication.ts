import { actionType } from '../actioncreator/actionfuncs'


export interface authe {
    token:string;
    admin:string;
}  

export type dataType = {
    [key:string]:Array<{[key:string]:string}>|{[key:string]:object|[]|string}
}

export interface stateData {
    error:boolean|string,
    loading:boolean | string,
    data: {
        auth?: {
            token?: string;
            isadmin?: number|string;
        }
    }
}

const initialState: stateData = {
    error: false,
    loading: false,
    data: {
        auth: {
            token: "", isadmin: 0
        }
    }
}

const authenticate = (state = initialState,action:actionType) =>{
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading:true,
            }
        
        case 'uploading':
            localStorage['auth'] = JSON.stringify(action.payload)
            return {
                ...state,
                data:{...state.data,auth:action.payload} ,
                loading:false,
            }
        
        case 'checkLocal':
        const auth:stateData['data']['auth']= JSON.parse(localStorage['auth']);
            return {
                ...state,
                data:{...state.data,'auth':auth},
                loading:false,
            }
        
        case 'logout':
            delete localStorage['auth'];
            return {
                ...state,
                data:{}
            }
        
        case 'profile':
            return {
                ...state, 
                data:{...state.data,user:action.payload} as dataType,
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