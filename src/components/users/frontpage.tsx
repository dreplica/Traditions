import React from 'react';
import { Front } from '../../style/navigation';
import Categories from './categories';
import Search from './search';
import { RightComponent } from '../../style/categories';
import Slide from '../slider';

const Frontpage:React.FC = () =>{
  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            <Slide/>
        </RightComponent>
    </Front>
  );
}


export default Frontpage;

