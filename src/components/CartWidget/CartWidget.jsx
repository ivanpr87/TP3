import React from 'react';
import "./CartWidget"
import "./CartWidget.css"

const CartWidget = ({carrito}) => {
    return (
        <div className='textoColor'>
            <p>Tu {carrito}</p>
            <img src="/assets/images/carrito.svg" alt="" />
        </div>
    );
}

export default CartWidget;
