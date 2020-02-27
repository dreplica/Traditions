import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../img/five.jpg'
import { connect } from 'react-redux';
import { Modal } from '../../../store/reducers/effects';
import { modalView } from '../../../store/actionCreators/actiontypes';
import axios from 'axios' 
interface Props{
    image:string;
    name:string;
    price:string;
    desc:string;
    modal:string;
    viewing:(args:string)=>void
}
const OneComponent:React.FC<Props> = ({image,name,price,desc,modal,viewing}) =>{
    const [view, setView] = useState('none')
    const [modalview, setmodalview] = useState(modal)
    const handleView = () =>{
      setView('block')
    }
    const hideView = ()=>{
        setView('none')
    }
    // axios.get('http://localhost:3000/items')
    // .then(res=>getItems(res.data))
  return (
    <Card>
        <div className='img' onMouseOver={handleView} onMouseOut={hideView}>
            <div className='view-details' style={{display:view}}>
                <button onClick={(e)=>viewing('block')}><strong>View</strong></button> 
            </div>
            <div className='price'>&#8358;{price}</div>
            <img src='http://localhost:3000/images/loo.jpg' alt='name'/>
        </div>
        <div className='details'>
         <p><strong>{name}</strong></p>
         <button><strong>Add to Cart</strong></button>
        </div>
    </Card>
  );
}

const mapStateToProps = (state:Modal)=>({
    modal:state.modal
})

export default connect(mapStateToProps,{viewing:modalView})(OneComponent)
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
