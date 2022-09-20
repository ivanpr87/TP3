import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail.jsx/ItemDetail";
//import DataProductos from "../../Productos/DataProductos";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";






export default function ItemDetailConteiner() {


    const { detalleId } = useParams()

    const [item, setItem] = useState([]);


    /*   useEffect(() => {
            const getItemData = new Promise((resolve) => {
                setTimeout(() => resolve(DataProductos.find(Productos => Productos.id === Number(id))), 2000)
    
            });
    
            getItemData.then((response) => setItem(response));
        }, [id]);
    
    */

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', detalleId);
        getDoc(queryDoc)
            .then(res => SVGMetadataElement({ id: res.id, ...res.data() }))
    }, [detalleId])

    return item ? <ItemDetail list={item} setItem={setItem} />: <h1>Cargando...</h1>
        
    ;
}
