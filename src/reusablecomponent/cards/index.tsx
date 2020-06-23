import React, { MouseEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import img from '../../img/womgowncan.jpg'

import { Modal } from '../../store/reducers/effects';
import { modalView } from '../../store/actioncreator/effects';
import { getPreview, addCart } from '../../store/actioncreator/item';
import { ITEMS, initialItems } from '../theme/types';
import getsingleimage from '../getsingleimage'
import {
    Container,
    Image,
    View,
    Cover,
    Details,
    CartButton,
    Name,
    Price
} from './style';
import Items from '../../screens/homescreen/context/items';

interface IProps {
    item: ITEMS;
    modal: string;
    current: (args: ITEMS) => void
    viewing: (args: string) => void
    cart: (args: ITEMS) => void
}

function Card(props: IProps) {
    const [state, setstate] = useState<{ display: "none" | "block", item: ITEMS }>({
        display: "none",
        item: initialItems
    })

    useEffect(() => {
        setstate({ ...state, item: props.item })
    }, [props.item])


    const showModal = (e: MouseEvent) => {
        props.viewing('block')
        props.current(state.item)
    }

    const addCart = (e: MouseEvent) => {
        e.preventDefault();

        props.cart(state.item)
    }

    const showCover = (e: MouseEvent) =>
        (state.display === "none")
            ? setstate({ ...state, display: "block" })
            : setstate({ ...state, display: "none" })

    return (
        <Container onMouseEnter={showCover} onMouseLeave={showCover}>
            {console.log("break bones ====>", state.item)}
            <Cover style={{ display: state.display }} />
            {
                state.item.id.length
                    ? <Image src={getsingleimage(state.item.image as string)} />
                    : null
            }
            <View
                style={{ display: state.display }}
                onClick={showModal}
            >View</View>
            <Price><strong>&#8358;{state.item.price}</strong></Price>
            <Details>
                <Name><strong>{state.item.itemname}</strong></Name>
                <CartButton onClick={addCart}><strong>Add to Cart</strong></CartButton>
            </Details>
        </Container>

    );
}

const mapStateToProps = (state: Modal) => ({
    modal: state.modal
})

const dispatch = { viewing: modalView, current: getPreview, cart: addCart }

export default connect(mapStateToProps, dispatch)(Card)
