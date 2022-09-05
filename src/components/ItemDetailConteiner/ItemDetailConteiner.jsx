import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail.jsx/ItemDetail";
import DataProductos from "../../Productos/DataProductos";



export default function ItemDetailConteiner() {
    const [item, setItem] = useState([]);

    useEffect(() => {
    const getItemData = new Promise((resolve, reject) => {
        setTimeout(() => resolve(DataProductos.find(Productos => Productos.id === 1)), 2000)
        
    });

    getItemData.then((response) => setItem(response));
    }, []);

    return (
    <div>
        <ItemDetail list={item} />
    </div>
    );
}
