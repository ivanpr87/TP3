/*import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from "../ItemList/ItemList";
import DataProductos from "../../Productos/DataProductos";




export default function ItemListConteiner() {

  }
    const [item, setItem] = useState([]);

    useEffect (() => {
      const getItemData = new Promise((resolve, reject) => {
        
          resolve(DataProductos)
      
      })

      getItemData
      .then(response => setItem(response))
    }, []);

  
  
  return (
    <div>
      <ItemCount stock={10} onAdd={onAdd} />
      <ItemList list={item}/>
      
      
    </div>
  )
}*/
