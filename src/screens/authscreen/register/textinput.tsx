import React from 'react';

import { Input } from '../style'

interface Iprops{
    changeHandeler(T: any): void;
    type: string;
    value: string|number;
    style?: object;
}


export default function InputField(props:Iprops) {
  return ( 
      <Input {...props} 
      style={props.style}
      onChange={props.changeHandeler}
      />
  );
}
