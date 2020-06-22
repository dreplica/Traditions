import React from 'react';

import { Input } from '../style'

interface Iprops {
    changeHandeler(T: any): void;
    type: string;
    value: string | number;
    style?: object;
    placeholder?: string
}

const checkboxStyle = {
    width: 20,
    height: 20,
    marginLeft: 10
}


export default function InputField(props: Iprops) {

    const styling = props.type === 'checkbox' ? checkboxStyle : props.style

    return ( 
        <Input {...props}
            style={styling}
            placeholder={props.placeholder}
            onChange={props.changeHandeler}
        />
    );
} 
