import React from 'react'
import Item from '../Item/Item'


const ItemList = ({ list }) => {
  return (
    <div className='card_container row'>
      {list.map((dato) => (
        <Item dato={dato} key={dato.id} />
      ))}
    </div>
  )
}

export default ItemList
