import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemListConteiner() {
  function onAdd(count){
    console.log(`Agregaste ${count} unidades al carrito`)  
  }
  return (
    <div>
      <ItemCount stock={10} onAdd={onAdd} />
    </div>
  )
}
