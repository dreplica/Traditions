import React from 'react';
import { Front } from '../../style/navigation';
import Categories from './categories';
import Search from './search';
import { RightComponent } from '../../style/categories';

const Frontpage:React.FC = () =>{
  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
        </RightComponent>
    </Front>
  );
}


export default Frontpage;

