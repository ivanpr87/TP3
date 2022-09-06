import React from "react";
import ItemCounterHooks from "../ItemCounterHooks/ItemCounterHooks";
import "./ItemDetail.css";

const ItemDetail = ({ list }) => {
    const onAdd = (count) => {
        
    };
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={"../assets/images/" + list.img}
                alt="imagen"
            />
            <div className="card-body">
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">{list.description}</p>
                <p className="card-text">$ {list.price}</p>
                <ItemCounterHooks stock={list.stock} initial={0} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
