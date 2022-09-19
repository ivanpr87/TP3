import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartCards = ({ product }) => {

    const { removeItem } = useCartContext();

    return (
        <div>
            <div className="card mb-3">
                <h3 className="card-header">{product.name}</h3>

                <div className="card-body">
                    <img src={"../assets/images/" + product.img} style={{ width: '25rem' }} alt="imagen-producto"/>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cantidad {product.quantity}</li>
                    <li className="list-group-item">Precio individual ${product.price}</li>
                    <li className="list-group-item">Sub total ${product.quantity * product.price}</li>
                </ul>
                <div className="card-body">
                    <button onClick={() => removeItem(product.id)} class="badge bg-danger"> Eliminar Prodcuto</button>

                </div>

            </div>
        </div>

    );
}


export default CartCards;