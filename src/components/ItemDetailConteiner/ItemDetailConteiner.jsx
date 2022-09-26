import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import DataProductos from "../../Productos/DataProductos";
import { useParams } from 'react-router-dom';
import {doc, getDoc } from "firebase/firestore";
import Spinner from '../Spinner/Spinner';
import db from '../../firebase/firebase';






export default function ItemDetailConteiner() {


    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()  
    const [load, setLoad] = useState(true)


/*   useEffect(() => {
        const getItemData = new Promise((resolve) => {
            setTimeout(() => resolve(DataProductos.find(Productos => Productos.id === Number(id))), 2000)

        });

        getItemData.then((response) => setItem(response));
    }, [id]);

*/

//tambien lo dejo para que se vea como estaba antes
const getSelected = async (idItem) => {
    try {
        const document = doc(db, "productos", idItem)
        const response = await getDoc(document)
        const result = { id: response.id, ...response.data() }
        setSelectedItem(result)
        setLoad(false)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getSelected(id)
}, [id])




return (
    <>
        {load ? <Spinner /> : <ItemDetail list={selectedItem} />}
    </>
)
}
