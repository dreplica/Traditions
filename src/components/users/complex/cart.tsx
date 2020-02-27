import React, { useState,MouseEvent } from 'react'; 
import styled from 'styled-components';
import two from '../../../img/five.jpg'
import { objectData, itemState } from '../../../store/reducers/items';
import { removeCart } from '../../../store/actionCreators/actiontypes';
import { connect } from 'react-redux';
import { ContainCart, Cart } from '../../../style/cart';

const Carts:React.FC<{data:objectData[]; remove:(id:string)=>void}>=({data,remove}) =>{
    const [total, settotal] = useState(0)
    const handleClose = (e:MouseEvent)=>{
        console.log(data)
        e.preventDefault()
        remove(e.currentTarget?.id)
    }  
    return (
    <Cart>
        <div className='head-cart'>
            <h3>Cart {data.length} items</h3> 
            <button><strong>Buy Now</strong></button>
        </div>
        <div className='main-cart'>
            <div className='cart'>{
            data.map((key,index)=> <ContainCart key={index}>
            <div className='close' onClick={handleClose} id={key.id}><h1><strong>X</strong></h1></div>
            <div className='img-cart'><img src={`http://localhost:3000/images/${key.image}`} alt=''/></div>
            <div className='desc-cart'>
                <p>{key.itemname}</p>
                <p>&#8358;{key.price}</p>
            </div>
        </ContainCart>)}</div>
            <div className='total'>
            <h2><strong>total: &#8358;{60000}</strong></h2> 
            </div>
        </div>
    </Cart>
  );
            }
const mapStateToProps = ({ItemsReducer}:{ItemsReducer:itemState})=>({
    data:ItemsReducer.cart
})
export default connect(mapStateToProps,{remove:removeCart})(Carts);

