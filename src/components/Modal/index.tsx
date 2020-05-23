import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { modalView } from '../../store/actionCreators/effects';
import { Modal } from '../../store/reducers/effects';
import { ITEMS } from '../../ReusableComponents/theme/types';
import { itemState } from '../../store/reducers/items';
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
    RemoveModal: (arg: "none" | "flex" | "block") => void;
    current: ITEMS;
}

function Modalview({ current, modal, RemoveModal }: Iprops) {
    const close = () => {
        window.alert("clicked")
        RemoveModal('none')
    }

    const addCart = (e: MouseEvent) => {
        e.preventDefault();
        // AddCart(current)
    }

    return (
        <Container style={{ display: modal }}>
            <span className='close' onClick={close}><strong>X</strong></span>
            <Content>
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
export default connect(mapStateToProps, { RemoveModal: modalView})(Modalview)
