import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({dato}) =>{
    
    
    
    return (
        <>
        <div className='card row center'>
            <h1>{dato.name}</h1>
           <img src={dato.img} alt="dato.name" />
            <p>Descripcion : {dato.description}</p>
            <p>precio : {dato.price}</p>
            <Link to ={`/detalles/${dato.id}`}>
            <button className="card-body fw-bold fs-3 text-center" style={{width:'20rem'}}>Ver producto</button>
            </Link>
        </div>
        </>
    )
}


export default Item;

