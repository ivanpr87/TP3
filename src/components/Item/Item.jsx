import React from 'react'
import './Item.css';
import ItemCounterHooks from "../ItemCounterHooks/ItemCounterHooks";


const Item = ({dato}) =>{
    
    return (
        <>
        <div className='card'>
            <h1>{dato.name}</h1>
            <img src={require(`../../../public/assets/images/${dato.img}`)} alt="dato.name" />
            <p>Descripcion = {dato.text}</p>
            <p>precio = {dato.price}</p>
            <div> <ItemCounterHooks stock= {dato.stock}  /> 
                <useCounter />
            </div>

        </div>
        </>
    )
}


export default Item;

