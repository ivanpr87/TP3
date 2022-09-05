import React from 'react'
import Item from '../Item/Item'


  
const ItemList = ({ item }) => {

  return (
    <div className='card_container row'>
      {item.map((dato) => (
        <Item dato={dato} key={dato.id} />
      ))}
    </div>
  )
}

export default ItemList;
