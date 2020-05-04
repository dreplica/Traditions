import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { modalView, addCart } from '../../store/actionCreators/actiontypes';
import { Modal } from '../../store/reducers/effects';
import { itemState, objectData } from '../../store/reducers/items';
import {
    Container,
    Image,
    Content,
    Size,
    Description,
    Price
} from './style';

interface Iprops {
    modal: string;
    RemoveModal: (arg: string) => void;
    current: objectData;
    AddCart: (args: objectData) => void
}

function Modalview({ current, modal, RemoveModal, AddCart }: Iprops) {
    const close = () => {
        RemoveModal('none')
    }

    const addCart = (e: MouseEvent) => {
        e.preventDefault();
        AddCart(current)
    }

    return (
        <Container style={{ display: modal }}>
            <span className='close' onClick={close}><strong>X</strong></span>
            <Content>
                {/* <div className='nav' ><p>previous</p><p>next</p></div> */}
                <Image><img src={`http://localhost:3000/images/${current?.image}`} alt='' /></Image>
                <Description>
                    <h2>{current?.itemname}</h2>
                    <p className="desc">{current?.description}</p>

                    <Size>
                        <p>select size:</p>
                        <select>
                            <option value='135'>135</option>
                            <option value='135'>105</option>
                            <option value='135'>135</option>
                        </select>
                    </Size>
                    <Price><h3>&#8358;{current?.price}</h3></Price>
                    <Link to={`/seller`} onClick={close} className='check_designer'>Check Designer</Link>
                    <button onClick={addCart}>Add to Cart</button>
                </Description>
            </Content>
        </Container>
    );
}

const mapStateToProps = ({ EffectReducers, ItemsReducer }: { EffectReducers: Modal, ItemsReducer: itemState }) => ({
    modal: EffectReducers.modal,
    current: ItemsReducer.currentItem
})
export default connect(mapStateToProps, { RemoveModal: modalView, AddCart: addCart })(Modalview)
