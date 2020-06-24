import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { modalView, } from '../../store/actioncreator/effects';
import { addCart } from '../../store/actioncreator/item';
import { Modal } from '../../store/reducers/effects';
import { itemState } from '../../store/reducers/items';
import { ITEMS } from '../../reusablecomponent/theme/types';
import getimage, { Imaging } from '../../reusablecomponent/getimage';
import InputField from '../../screens/authscreen/register/textinput';
import {
    Container,
    Images,
    Size,
    Button,
    Desc,
    Text,
    Close,
    Designer,
    Description,
    Price
} from './style';

interface Iprops {
    modal: string;
    RemoveModal: (arg: string) => void;
    current: ITEMS;
    AddCart: (args: ITEMS) => void
}

function Modalview({ current, modal, RemoveModal, AddCart }: Iprops) {
    const close = () => {
        RemoveModal('none')
    }

    const addCart = (e: MouseEvent) => {
        e.preventDefault();
        AddCart(current)
    }


    const ShowImage = getimage(current.image, Imaging)

    return (
        <Container style={{ display: modal }}>
            <Close onClick={close}>X</Close>
            <Images>
                <ShowImage />
            </Images>
            <Description>
                <Text style={{
                    textDecoration:'underline',
                    textAlign:'center', 
                    fontSize: 20, fontWeight: 'bold'
                }}>{current?.itemname} &#8358;{current?.price}</Text>
                <Desc>{current?.description}</Desc>
                <Size>
                    <Text>your size:</Text>
                    <InputField
                        style={{ width: 50, height: 30 }}
                        placeholder='write size here'
                        type='text'
                        value='125'
                        changeHandeler={() => { }} />
                </Size>
                <Price></Price>
                <Designer><Link to={`/seller`} onClick={() => RemoveModal('none')}>Check Designer</Link></Designer>
                <Button onClick={addCart}>Add to Cart</Button>
            </Description>
        </Container>
    );
}

const mapStateToProps = ({ EffectReducers, ItemsReducer }: { EffectReducers: Modal, ItemsReducer: itemState }) => ({
    modal: EffectReducers.modal,
    current: ItemsReducer.currentItem
})
export default connect(mapStateToProps, { RemoveModal: modalView, AddCart: addCart })(Modalview)
