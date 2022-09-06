import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList'
import DataProductos from "../../Productos/DataProductos";
import { useParams } from 'react-router-dom';




export default function ItemListConteiner() {
  
    const [item, setItem] = useState([]);

    const {categoria} = useParams ()

    useEffect (() => {
      const getItemData = new Promise((resolve, reject) => {

        if(categoria){
          resolve(DataProductos.filter(item => item.categoria === categoria))
        }
        else{
          resolve(DataProductos)
        }
          
      
      })

      getItemData
      .then(response => setItem(response))
    }, [categoria]);

  
  return (
    <>

      <ItemList item={item}/>
    
    </>
  );
}

