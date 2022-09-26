import React from "react";
import ItemCounterHooks from "../ItemCounterHooks/ItemCounterHooks";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ list }) => {
    const { addItem } = useCartContext();

    const navigate = useNavigate();

    function onAdd(count) {
        Swal.fire({
            title: `Usted agrego ${count} de ${list.name} al carrito`,
            text: "Finalizar compra?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Agregar al carrito",
            cancelButtonText: "Cancelar compra",
        }).then((result) => {
            if (result.isConfirmed) {
                const productoCarrito = { id: list.id, cantidad: count };
                console.log(productoCarrito);
                addItem(list, count);
                let stock = list.stock - {count};
                list.stock = stock;
                navigate("/cart");
            }
        });
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={list.img}
                alt="imagen"
            />
            <div className="card-body">
                <h5 className="card-title text-center">{list.name}</h5>
                <p className="card-text">{list.description}</p>
                <p className="card-text">$ {list.price}</p>
                <ItemCounterHooks stock={list.stock} initial={0} onClick={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
