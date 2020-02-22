import React from 'react';
import {Category} from '../../style/categories'

const Categories: React.FC<{}> =()=> {
  return (
    <Category>
        <div className='head' >Categories</div>
        <div className='cat-list'>
            <ul>
                <li><a href="/">Women's Clothing</a></li>
                <li><a href="/">Men's Clothing</a></li>
                <li><a href="/">Children's Clothing</a></li>
                <li><a href="/">Accessories</a></li>
                <li><a href="/">Women's Shoes</a></li>
                <li><a href="/">Men's Shoes</a></li>
            </ul>
        </div>
        <div className='head' >Design</div>
        <div className='cat-list'>
            <ul>
                <li><a href="/">Ankara</a></li>
                <li><a href="/">Ghana Style</a></li>
                <li><a href="/">Tomi's Fas</a></li>
                <li><a href="/">Africana</a></li>
            </ul>
        </div>
        {/* <div className='head' >Filter</div>
        <div className='cat-list'>
            <ul>
                <li><label>price <input type='range' min='0' max='1000000' onChange={()=>'l'}/></label></li>
                <li><label>design <input type='text' onChange={()=>'l'}/></label></li>
                <li><label>type <input type='text' onChange={()=>'l'}/></label></li>
                <button>submit</button>
            </ul>
        </div> */}
    </Category>
  );
}

export default Categories