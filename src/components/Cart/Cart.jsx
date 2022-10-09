import React from "react";
import { Link } from "react-router-dom";
import CartCards from "../CartCards/CartCards";
import CartEndShop from "../CartEndShop/CartEndShop";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (

            <>
                
                    <div className="card-body">
                        <Link to="/" className="Underline"><h5 className="card-body fw-bold fs-3 text-center">Ver Productos!</h5></Link>
                    </div>
                
            </>
        );
    }

    return (
        <>
            <h1 className="text-center m-5">Carrito de Compras</h1>
            {cart.map((product) => (
                <CartCards key={product.id} product={product} />
            ))}
            <CartEndShop totalPrice={totalPrice} />
            
        </>
    );
};

export default Cart;