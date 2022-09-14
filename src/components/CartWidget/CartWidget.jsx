import React from 'react';
import "./CartWidget"
import "./CartWidget.css"
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {

    const {totalProducts} = useCartContext();
    
    return (
        <div className='textoColor'>
            
            <img src="/assets/images/carrito.svg" alt="" />
            <li><i className="bi bi-cart2">{totalProducts()}</i></li>
            
        </div>
    );
}

export default CartWidget;
