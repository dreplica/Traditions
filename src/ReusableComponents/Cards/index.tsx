import React, { MouseEvent, useState } from 'react';
import { connect } from 'react-redux';
import img from '../../img/womgowncan.jpg'

import { objectData } from '../../store/reducers/items';
import { Modal } from '../../store/reducers/effects';
import { modalView, getPreview, addCart } from '../../store/actionCreators/actiontypes';
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

interface IProps {
    image: string;
    name: string;
    price: string;
    desc: string;
    id: string;
    modal: string;
    current: (args: string) => void
    viewing: (args: string) => void
    cart: (args: objectData) => void
}

function Card(props: IProps) {
    const [display, setstate] = useState<"none"|"block">("none")
    const showModal =( e: MouseEvent  )=> {
        props.viewing('block')
        props.current(props.id)
    }
    
    const addCart = (e: MouseEvent) => {
        e.preventDefault();
        props.cart({
            image: props.image,
            itemname: props.name,
            price: props.price,
            id: props.id
        })
    }

    const showCover = (e: MouseEvent) =>
        (display === "none") 
            ? setstate("block")
            :setstate("none")

    return (
        <Container onMouseEnter={showCover} onMouseLeave={showCover}>
            <Cover style={{display:display}}/>
            <Image src={img}/>
            <View
                style={{display:display}}
                onClick={showModal}
            >View</View>
            <Price><strong>&#8358;{props.price}</strong></Price>
            <Details>
            <Name><strong>{props.name}</strong></Name>
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
