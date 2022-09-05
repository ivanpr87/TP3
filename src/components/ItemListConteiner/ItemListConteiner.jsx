import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList'
import DataProductos from "../../Productos/DataProductos";




export default function ItemListConteiner() {

  
    const [item, setItem] = useState([]);

    useEffect (() => {
      const getItemData = new Promise((resolve, reject) => {
        
          resolve(DataProductos)
      
      })

      getItemData
      .then(response => setItem(response))
    }, []);

  
  return (
    <>

      <ItemList item={item}/>
    
    </>
  );
}

