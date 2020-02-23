import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../img/five.jpg'

interface Props{
    image:string;
    name:string;
    price:string;
    desc:string;
}
const OneComponent:React.FC<Props> = ({image,name,price,desc}) =>{
    const [view, setView] = useState('none')
    const handleView = () =>{
      setView('block')
      console.log(view)
    }
    const hideView = ()=>{
        setView('none')
        console.log(view)
    }
  return (
    <Card>
        <div className='img' onMouseOver={handleView} onMouseOut={hideView}>
            <div className='view-details' style={{display:view}}>
                <button><strong>View</strong></button>
            </div>
            <div className='price'>{price}</div>
            <img src={logo} alt='name'/>
        </div>
        <div className='details'>
         <p><strong>{name}</strong></p>
         <button><strong>Add to Cart</strong></button>
        </div>
    </Card>
  );
}

export default OneComponent

export const Card = styled.div`
  width:250px;
  margin:10px auto;
  height:300px;
  border-radius:0px 0px 20px 20px;

    .img{
        background:transparent;
        margin:0px;
        width:100%;
        height:200px;
        .view-details{
            position:absolute;
            width:250px;
            z-index:2;
            height:200px;
            background:rgba(0,0,0,0.6);
    
            button{
                margin:auto;
                position:relative;
                top:45%;
                left:35%;
                background:transparent;
                border:2px solid white;
                color:white;
                padding:10px 15px;
            }
        }

        .price{
            position:absolute;
            padding:0px 5px;
            color:white;
            background:black;
            // margin-top:20px;
            overflow:hidden;
            // transform:rotate(-40deg)
            }
        }
        img{
            width:100%;
            height:100%;
        }
    }
    .details{
        background:white;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        margin:0px auto;
        width:100%;
        height:100px;
        border-radius:0px 0px 20px 20px;
        

        p{
            margin:10px 0px;
            text-align:center;
            color:black;
            overflow:hidden;
        }
        
        button{
            border-radius:0px 0px 20px 20px;
            width:100%;
            height:40px;
            border:0px;
            color:lightgrey;
            background:linear-gradient(to right, orange,purple);

            &:hover{
                color:white;
            }
        }
    }
`;
