import { objectData } from "../reducers/items"

export interface actionType {
    type: string;
    payload?: string | { [key: string]: string } | objectData[],
    modal?: string;
}

export const isloading = (): actionType => ({
    type: 'loading',
})

export const isError = (): actionType => ({
    type: 'error'
})

export const uploading = (payload: actionType['payload']): actionType => ({
    type: 'uploading',
    payload
})
