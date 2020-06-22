import React, { MouseEvent, useState } from 'react';
import { connect } from 'react-redux';
import img from '../../img/womgowncan.jpg'

import { Modal } from '../../store/reducers/effects';
import { modalView } from '../../store/actioncreator/effects';
import { getPreview, addCart } from '../../store/actioncreator/item';
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
    current: (args: string) => void
    viewing: (args: string) => void
    cart: (args: ITEMS) => void
}

function Card(props: IProps) {
    const [display, setstate] = useState<"none" | "block">("none")
    
    const showModal = (e: MouseEvent) => {
        props.viewing('block')
        props.current(props.id)
    }

    const addCart = (e: MouseEvent) => {
        e.preventDefault();
        
        props.cart({
            image: props.image,
            itemname: props.itemname,
            price: props.price,
            id: props.id,
            description:props.description
        })
    }

    const showCover = (e: MouseEvent) =>
        (display === "none")
            ? setstate("block")
            : setstate("none")
    
    const getImage = (arg:string) => {
        const img = arg.split(',')[0]
        return `https://res.cloudinary.com/dyypxjmx9/image/upload/v1592830732/${'traditions/items/wp1822759-rick-and-morty-wallpapers_kqaqff.jpg'}`
    }

    return (
        <Container onMouseEnter={showCover} onMouseLeave={showCover}>
            <Cover style={{ display: display }} />
            <Image src={getImage("lo,lo")} />
            <View
                style={{ display: display }}
                onClick={showModal}
            >View</View>
            <Price><strong>&#8358;{props.price}</strong></Price>
            <Details>
                <Name><strong>{props.itemname}</strong></Name>
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
