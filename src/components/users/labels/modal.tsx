import React, { useState, MouseEvent } from 'react';
import two from '../../../img/five.jpg'
import { connect } from 'react-redux';
import { modalView } from '../../../store/actionCreators/actiontypes';
import { Modal } from '../../../store/reducers/effects';
import { Modall } from '../../../style/modalview';


const Modalview:React.FC<{modal:string;view:(arg:string)=>void}> = ({modal,view}) => {
    const [remove, setremove] = useState<string>(modal)//let redux manage the state coming in for viewing
    const close = (e:MouseEvent) =>{
        e.preventDefault()
        view('none')
        console.log(modal)
    }
  return (
      <>
    <Modall style={{display:modal}}>
        <span className='close' onClick={close}><strong>X</strong></span>
        <div className='main-modal'>
                {/* <div className='nav' ><p>previous</p><p>next</p></div> */}
                <div className='image'><img src={two} alt=''/></div>
                <div className='description'>
                    <h2>{`Ankara top`}</h2>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing el
                        Modi et saepe aspernatur voluptatem animi aliquid est 
                        dolorem illo incidunt cumque, voluptatibus explicabo 
                        voluptatum dolore eligendi, amet at. Exercitationem cupidit
                        ate tempora. Laborum enim neque quae cumque, voluptas quisquam nostrum 
                        dolor magni recusandae voluptatem qui fugiat consectetur perferendis?</p>
                    
                    <div className='size'>
                        <p>select size:</p>
                        <select>
                            <option value='135'>135</option>
                            <option value='135'>105</option>
                            <option value='135'>135</option>
                        </select>
                    </div>
                    <div className='price-modal'><h3>&#8358;10,000</h3></div>
                    <button>Add to Cart</button>
                </div> 
            <div className='size'><img src='/' alt=''/></div>
        </div>
    </Modall>
    </>
  );
}

const mapStateToProps = ({EffectReducers}:{EffectReducers:Modal})=>({
    modal:EffectReducers.modal
})
export default connect(mapStateToProps,{view:modalView})(Modalview)
