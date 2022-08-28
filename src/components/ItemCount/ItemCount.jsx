import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    function add(){
        if ( count < stock){
        setCount(count + 1)}
    }

    function substract(){
        if (count > 0){
        setCount(count -1)
        }
    }

    function reset(){
        setCount(0)
    }

  return (
    <div>
        <div className='counter-box'>
            <h1>Flores</h1>
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

export default ItemCount


