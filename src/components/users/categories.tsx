import React,{useState, MouseEvent} from 'react';
import {Category} from '../../style/categories'

export interface dropdown{
    women:string;
    men:string;
    access:string;
    wfoot:string;
    mfoot:string;
}
const dropit:dropdown = {
    women:"none",
    men:"none",
    access:"none",
    wfoot:"none",
    mfoot:"none",
}
const Categories: React.FC<{}> =()=> {
    const [drop, setdrop] = useState<dropdown>(dropit)
    const handleDrop = (e:MouseEvent)=>{
        e.preventDefault();
        console.log("hello")
        const classy = e.currentTarget.className
        classy === "none"?setdrop({...drop,[e.currentTarget.id]:'block'}):setdrop({...drop,[e.currentTarget.id]:'none'})
        console.log(drop)
    }
  return (
    <Category>
        <div className='head' >Categories</div>
        <div className='cat-list'>
            <ul>
                <li>
                    <a href="/" id='women' className={drop.women} onClick={handleDrop}>Women's Clothing</a>
                    <ul className='dropdown' style={{display:drop.women}}>
                        <li>Tops</li>
                        <li>gown</li>
                        <li>skirts</li>
                        <li>style</li>
                    </ul>
                </li>
                <li>
                    <a href="/" id='men' className={drop.men} onClick={handleDrop}>Men's Clothing</a>
                    <ul className='dropdown' style={{display:drop.men}}>
                        <li>shirts</li>
                        <li>trousers</li>
                        <li>shorts</li>
                        <li>style</li>
                    </ul>
                </li>
                {/* <li>
                    <a href="/">Children's Clothing</a>
                    <ul>
                        <li>Tops</li>
                        <li>gown</li>
                        <li>skirts</li>
                        <li>style</li>
                    </ul>
                </li> */}
                <li>
                    <a href="/" id='access' className={drop.access} onClick={handleDrop}>Accessories</a>
                    <ul className='dropdown' style={{display:drop.access}}>
                        <li>bangles</li>
                        <li>waist beeds</li>
                        <li>necklace</li>
                        <li>rings</li>
                    </ul>
                </li>
                <li>
                    <a href="/" id='wfoot' className={drop.wfoot} onClick={handleDrop}>Women foot wears</a>
                    <ul className='dropdown' style={{display:drop.wfoot}}>
                        <li>Sandals</li>
                        <li>Hills</li>
                        <li>Shoes</li>
                    </ul>
                </li>
                <li>
                    <a href="/" id='mfoot' className={drop.mfoot} onClick={handleDrop}>Men foot wears</a>
                    <ul className='dropdown' style={{display:drop.mfoot}}> 
                        <li>sandals</li>
                        <li>shoes</li>
                    </ul>
                </li>
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