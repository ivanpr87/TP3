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

    const clear = () => setCart([]);

    const isInCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;

    const removeItem = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    const totalProducts = () =>
        cart.reduce((collector, product) => collector + product.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                clear,
                isInCart,
                removeItem,
                addItem,
                totalProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
