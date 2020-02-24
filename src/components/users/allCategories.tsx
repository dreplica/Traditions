import React, { useState, MouseEvent } from 'react';
import OneComponent from './labels/OneComponent';
import { Latest,Sort } from '../../style/sales';

const Sales: React.FC<{}> = () => {
    const [sortActive, setSortActive] = useState<{one:string;two:string;}>({one:'active',two:'none'})
    const sort = (e:MouseEvent)=>{
      e.preventDefault();
      for(let i in sortActive){
        if( i !== e.currentTarget.id){
          console.log("this is i",i)
          setSortActive({...sortActive,[e.currentTarget.id]:'active'})
        }
        else setSortActive({...sortActive,[e.currentTarget.id]:"none"})
      }
    }
    console.log("hello")
    const arr = Array.from({length:50},()=>1)
    const Spread = arr.map((x,i)=><OneComponent key={i} image={""} desc={""} name={"Hover Agbada"} price="&#8358;10,000"/>)
  return (<>
      <Sort>
        <div>
          <p>Filter By:</p>
          <button className={sortActive.one} id='one' onClick={sort}>Price Top</button>
          <button className={sortActive.two} id='two' onClick={sort}>Price Down</button>
        </div>
      </Sort>
    <Latest>
        {Spread}
    </Latest>
    </>
  );
}

export default Sales