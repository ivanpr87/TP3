import React from 'react'
import useCounter from '../../hooks/useCounter'


const ItemCounterHooks = ({stock, onAdd}) => {
    const {add, substract, reset, count} = useCounter(stock)
    
    
    return (
    <div>
        <div className='counter-box'>
            <p>stock {stock}</p>
            <p>cantidad {count}</p>
            <div>
                <button className='btn btn-danger' onClick={substract}> - </button>
                <button className='btn' onClick={reset}> Reset </button>
                <button className='btn btn-primary' onClick={add}> + </button>
            </div>
            <div>
                <button className='btn' onClick={() => onAdd(count)}> Confimar</button>
            </div>

        </div>
    </div>
    )
}

export default ItemCounterHooks