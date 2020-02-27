import React, { useState,MouseEvent } from 'react'; 
import styled from 'styled-components';
import two from '../../../img/five.jpg'

interface Single{
    name:string;
    price:string;
    size:number;
    img:string;
}
const Carts=() =>{
    //load from local storage to state
    //load carts from state to populate
    const data = Array.from({length:5},()=>1)
    const cart = data.map((key,index)=><SingleCart name={`Agbada ido`} 
    price={`10.000`} 
    img={"sam"} 
    size={60} 
    key={index}/>)
  return (
    <Cart>
        <div className='head-cart'>
            <h3>Cart {cart.length} items</h3> 
            <button><strong>Buy Now</strong></button>
        </div>
        <div className='main-cart'>
            <div className='cart'>{cart}</div>
            <div className='total'>
            <h2><strong>total: &#8358;{60000}</strong></h2> 
            </div>
        </div>
    </Cart>
  );
}

export default Carts;
const SingleCart:React.FC<Single> = ({name,price,img,size})=>{
    const [view, setview] = useState<string>('flex') 
    const handleClose = (e:MouseEvent) =>{
        e.preventDefault();
        setview('none')
 
    }
    return <ContainCart style={{display:view}}>
        <div className='close' onClick={handleClose}><h1><strong>X</strong></h1></div>
        <div className='img-cart'><img src={two} alt=''/></div>
        <div className='desc-cart'>
            <p>{name}</p>
            <p>&#8358;{price}</p>
            <p>size:{size}</p>
        </div>
    </ContainCart>
}

const ContainCart = styled.div`
    background:red;
    width:90%;
    background:transparent;
    font-weight:bolder;
    display:flex;
    transition:height 3s;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin:auto;
    height:250px;
    border-bottom:1px solid white;

        .close{
            position:relative;
            font-weight:bolder;
            top:-10vh;
            left:90%;

            :hover{
                transform:scale(1.2);
                cursor:pointer;
            }
        }

        p{
        font-size:20px;
        }
        .img-cart{
            width:200px;
            height:200px;
            overflow:hidden;

            img{
                max-width:100%;
                height:100%;
                transition:3s;

                :hover{
                    transform:scale(1.3);
                }

            }
        }



`
const Cart = styled.div`
    width:90%;
    height:auto;
    display:column;
    justify-content:center;
    align-items:center;

    .main-cart{
        width:100%;
        .cart{
            width:100%;
            height:50vh;
            overflow-y:auto;
        }
        .total{
            width:90%;
            text-align:right;
        }
    }

    .head-cart{
        width:89.9%;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;

        button{
            width:30%;
            padding:10px;
            border:0px;
            background:orange;
            color:lightgrey;
            border-radius:20px;

            :hover{
                color:black;
            }
        }
    }
`