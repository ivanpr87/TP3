import React from 'react'
import ItemCounterHooks from '../ItemCounterHooks/ItemCounterHooks'
import './ItemDetail.css'




const ItemDetail = ({ list }) => {

    const onAdd =  (count) => {
        console.log(`agregastes ${count}`)
    }
    return (
        <article className='caja'>
        <h1>{list.name}</h1>
        <div className='card-detail'>
            <div className='card-detail-left'>
            <img src={require(`../../../public/assets/images/${list.img}`)} alt="dato.name" className='img' />
            </div>
            <div className='card-detail-right'>
            <p>{list.description}</p>
            <p className='price'>${list.price}</p>
            
            <ItemCounterHooks stock={list.stock} initial={0} onAdd={onAdd}/>

            </div>
        </div>
    </article>
    )
}

export default ItemDetail