
import {useState} from 'react'


const useCounter = (stock) => {
    
    
    
        const [count, setCount] = useState(1)

    function add(){
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function substract() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function reset() {
        setCount(1)
    }
    
    return{
        add, substract, reset, count
    }
}
    


export default useCounter
