import React from 'react';
import { Searcher } from '../../style/navigation';
import { FiSearch } from 'react-icons/fi';

const Search:React.FC = () =>{
  return (
    <Searcher>
        <input type='search' placeholder='search items' />
        <button> <FiSearch/> </button> 
    </Searcher>
  );
}


export default Search;