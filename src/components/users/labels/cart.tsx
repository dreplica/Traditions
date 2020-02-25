import React from 'react'; 
import styled from 'styled-components';
import two from '../../../img/five.jpg'

interface Single{
    name:string;
    price:number;
    size:number;
    img:string;
}
const Carts=() =>{
    //load from local storage to state
    //load carts from state to populate
    const data = Array.from({length:60},()=>1)
    const cart = data.map((key,index)=><SingleCart name={`Agbada ido`} 
    price={parseFloat(`10,000`)} 
    img={"sam"} 
    size={60} 
    key={index}/>)
  return (
    <Cart>
        <div className='head-cart'><h3>Cart {cart.length} items</h3>  <button>Buy Now</button></div>
        <div className='main-cart'>
            <div className='cart'>{cart}</div>
            <div className='total'>
            <p>total:{60000}</p>
            </div>
        </div>
    </Cart>
  );
}

export default Carts;
const SingleCart:React.FC<Single> = ({name,price,img,size})=>{
    return <ContainCart>
        <div className='img-cart'><img src={two} alt=''/></div>
        <div className='desc-cart'>
            <p>name:{name}</p>
            <p>price:{price}</p>
            <p>size:{size}</p>
        </div>
    </ContainCart>
}

const ContainCart = styled.div`
    background:red;
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin:auto;
    height:200px;
    border:1px solid black;

    .img-cart{
        width:150px;
        height:200px;

        img{
            max-width:100%;
            height:100%;
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

    }
`