import React, { MouseEvent, useState } from 'react';
import { connect } from 'react-redux';
import img from '../../img/womgowncan.jpg'

import { Modal } from '../../store/reducers/effects';
import { modalView } from '../../store/actionCreators/effects';
import { getPreview,addCart } from "../../store/actionCreators/items";

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
import { ITEMS } from '../theme/types';

interface IProps {
    image: string;
    itemname: string;
    price: string;
    description: string;
    id: string;
    modal: string;
    cart:(args:ITEMS)=>void;
    current: (args: string) => void
    viewing: (args:  "none" | "flex"|"block") => void
}

function Card(props: IProps) {
    const [display, setstate] = useState<"none" | "flex" | "block">("none");

    const showModal = (e: MouseEvent) => {
        props.viewing('block')
        props.current(props.id)
    }

    const add_to_Cart = (e: MouseEvent) => {
        e.preventDefault();
        //lets add cart to localstorage directly
        addCart({
            description:props.description,
            image: props.image,
            itemname: props.itemname,
            price: props.price,
            id: props.id
        })
    }

    const showCover = (e: MouseEvent) =>
        (display === "none")
            ? setstate("block")
            : setstate("none")

    return (
        <Container onMouseEnter={showCover} onMouseLeave={showCover}>
            <Cover style={{ display: display }} />
            <Image src={(props.image ?? img)} />
            <View
                style={{ display: display }}
                onClick={showModal}
            >View</View>
            <Price><strong>&#8358;{props.price}</strong></Price>
            <Details>
                <Name><strong>{props.itemname}</strong></Name>
                <CartButton onClick={add_to_Cart}><strong>Add to Cart</strong></CartButton>
            </Details>
        </Container>
    );
}

const mapStateToProps = (state: Modal) => ({
    modal: state.modal
})

const dispatch = { viewing: modalView, current: getPreview, cart: addCart }

export default connect(mapStateToProps, dispatch)(Card)
