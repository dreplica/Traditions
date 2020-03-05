import React, { useState, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../../../store/reducers/effects';
import { modalView, getPreview, addCart } from '../../../store/actionCreators/actiontypes';
import { objectData } from '../../../store/reducers/items';
import { Card } from './onecomponentstyle';
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
