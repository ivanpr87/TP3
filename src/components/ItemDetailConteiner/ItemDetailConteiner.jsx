import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail.jsx/ItemDetail";
import DataProductos from "../../Productos/DataProductos";
import { useParams } from 'react-router-dom';





export default function ItemDetailConteiner() {


    const { id } = useParams()

    const [item, setItem] = useState([]);



    useEffect(() => {
        const getItemData = new Promise((resolve, reject) => {
            setTimeout(() => resolve(DataProductos.find(Productos => Productos.id === Number(id))), 2000)

        });

        getItemData.then((response) => setItem(response));
    }, [id]);


    return (
        <div>
            <ItemDetail list={item} />
        </div>
    );
}
