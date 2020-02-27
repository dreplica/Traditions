import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import logo from '../../../img/five.jpg'
import { connect } from 'react-redux';
import { Modal } from '../../../store/reducers/effects';
import { modalView, getPreview, addCart } from '../../../store/actionCreators/actiontypes';
import axios from 'axios' 
import { objectData } from '../../../store/reducers/items';
interface Props{
    image:string;
    name:string;
    price:string;
    desc:string;
    id:string;
    modal:string;
    current:(args:string)=>void
    viewing:(args:string)=>void
    cart:(args:objectData)=>void
}
const OneComponent:React.FC<Props> = ({image,name,price,desc,modal,viewing,id,current,cart}) =>{
    const [view, setView] = useState('none')
    const [modalview, setmodalview] = useState(modal)
    const handleView = () =>{
      setView('block')
    }
    const hideView = ()=>{
        setView('none')
    }
    const addCart = (e:MouseEvent) =>{
        e.preventDefault();
        cart({image,itemname:name,price,id})
    }
  return (
    <Card>
        <div className='img' onMouseOver={handleView} onMouseOut={hideView}>
            <div className='view-details' style={{display:view}}>
                <button onClick={(e)=>{viewing('block');current(id)}}><strong>View</strong></button> 
            </div>
            <div className='price'>&#8358;{price}</div>
            <img src={`http://localhost:3000/images/${image}`} alt='name'/>
        </div>
        <div className='details'>
         <p><strong>{name}</strong></p>
         <button onClick={addCart}><strong>Add to Cart</strong></button>
        </div>
    </Card>
  );
}

const mapStateToProps = (state:Modal)=>({
    modal:state.modal
})

const dispatch = {viewing:modalView,current:getPreview,cart:addCart}

export default connect(mapStateToProps,dispatch)(OneComponent)
// export default OneComponent

export const Card = styled.div`
  width:250px;
  margin:10px auto;
  height:350px;
  border-radius:0px 0px 20px 20px;

    .img{
        background:transparent;
        margin:0px;
        width:100%;
        height:250px;

        .view-details{
            position:absolute;
            width:250px;
            z-index:2;
            height:250px;
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
