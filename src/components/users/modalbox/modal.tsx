import React, {MouseEvent } from 'react';
import { connect } from 'react-redux';
import { modalView, addCart } from '../../../store/actionCreators/actiontypes';
import { Modal } from '../../../store/reducers/effects';
import { Modall } from '../../../style/modalview';
import { itemState, objectData } from '../../../store/reducers/items';
import { Link } from 'react-router-dom';

type Proper = {
    modal:string;
    view:(arg:string)=>void;
    current:objectData;
    cart:(args:objectData)=>void
}

const Modalview:React.FC<Proper> = ({current,modal,view,cart}) => {
    // const [remove, setremove] = useState<string>(modal)//let redux manage the state coming in for viewing
    const close = (e:MouseEvent) =>{
        // e.preventDefault()
        view('none')
    }
    const addCart = (e:MouseEvent) =>{
        e.preventDefault();
        cart(current)
    }
  return (
      <>
    <Modall style={{display:modal}}>
        <span className='close' onClick={close}><strong>X</strong></span>
        <div className='main-modal'>
                {/* <div className='nav' ><p>previous</p><p>next</p></div> */}
                <div className='image'><img src={`http://localhost:3000/images/${current?.image}`} alt=''/></div>
                <div className='description'>
                    <h2>{current?.itemname}</h2>
                    <p className="desc">{current?.description}</p>
                    
                    <div className='size'>
                        <p>select size:</p>
                        <select>
                            <option value='135'>135</option>
                            <option value='135'>105</option>
                            <option value='135'>135</option>
                        </select>
                    </div>
                    <div className='price-modal'><h3>&#8358;{current?.price}</h3></div>
                    <Link to={`/seller`} onClick={close} className='check_designer'>Check Designer</Link>
                    <button onClick={addCart}>Add to Cart</button>
                </div> 
            <div className='size'><img src='/' alt=''/></div>
        </div>
    </Modall>
    </>
  );
}

const mapStateToProps = ({EffectReducers,ItemsReducer}:{EffectReducers:Modal,ItemsReducer:itemState})=>({
    modal:EffectReducers.modal,
    current:ItemsReducer.currentItem
})
export default connect(mapStateToProps,{view:modalView,cart:addCart})(Modalview)
