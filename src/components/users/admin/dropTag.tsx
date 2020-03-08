import React, { useState,useEffect } from 'react'
import { DropIT } from './adminstyle'

const DropTag:React.FC<{name:string}> = ({name})=>{
  const [count, setcount] = useState<number>(90)
  const [check, setCheck] = useState<boolean>(false)
  useEffect(() => {
    let time:number;
    if(check && count > 0){
      time = setTimeout(()=>{
        let dim = count -1; 
        setcount(dim) 
      },5)
    }
    return ()=> clearTimeout(time)
  }, [check,count])

  return <>
  <DropIT style={{height:`${count}vh`}}>
    <div>
      <span>{name.toUpperCase()}</span>
      {console.log(count)}
      <button onClick={()=>setCheck(true)}>Press to view</button>
      <span id='down'>Fashion</span>
    </div>
  </DropIT>
 </>
}

export default DropTag
