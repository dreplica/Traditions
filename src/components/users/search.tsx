import React from 'react';
import { Searcher } from '../header/navigation';

const Search:React.FC = () =>{
  return (
    <Searcher>
        <input type='search' placeholder='search items' />
        <button>Search</button>
    </Searcher>
  );
}


export default Search;