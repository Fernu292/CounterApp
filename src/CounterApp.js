import { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value})=>{

    //Hooks con funciones
    const [counter, setCounter] = useState( value );//Retorna un valoe


    //HandleAdd for onClick
    const handleAdd = ()=>{
        setCounter( counter + 1)
    }
    
    const Reset = ()=>{
        setCounter(value);
    }

    const handleLess = ()=>{
        setCounter( counter -1);
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick = { handleAdd }> +1</button>
            <button onClick = { Reset }> Reset</button>
            <button onClick = { handleLess }> -1</button>
        
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;