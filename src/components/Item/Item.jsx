import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({dato}) =>{
    
    
    
    return (
        <>
        <div className='card row'>
            <h1>{dato.name}</h1>
            <img src={require(`../../../public/assets/images/${dato.img}`)} alt="dato.name" />
            <p>Descripcion = {dato.description}</p>
            <p>precio = {dato.price}</p>
            <Link to ={`/detalles/${dato.id}`}>
            <button className='button button-detail'>Ver detalles</button>
            </Link>
        </div>
        </>
    )
}


export default Item;

