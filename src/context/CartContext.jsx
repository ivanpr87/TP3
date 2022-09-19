import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (list, quantity) => {
        if (isInCart(list.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === list.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product;
                })
            );
        } else {
            setCart([...cart, { ...list, quantity }]);
        }
    };

    const limpiar = () => setCart([]);

    const isInCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;

    const removeItem = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    const totalProducts = () =>
        cart.reduce((collector, product) => collector + product.quantity, 0);

    const totalPrice = (cuotas) => {
        const numero = parseInt(cuotas)
        if (numero === 1) {
            return cart.reduce
            ((prev, act) => prev + act.quantity * act.price, 0)
        } else if (numero === 3) {
            return cart.reduce
            ((prev, act) => prev + act.quantity * act.price * 1.20, 0)
        } else if (numero === 6) {
            return cart.reduce
            ((prev, act) => prev + act.quantity * act.price * 1.40, 0)
        } else if (numero === 12) {
            return cart.reduce
            ((prev, act) => prev + act.quantity * act.price * 1.60, 0)
        }

    }

    return (
        <CartContext.Provider
            value={{
                limpiar,
                isInCart,
                removeItem,
                addItem,
                totalProducts,
                totalPrice,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
