import PropTypes from 'prop-types';

//functional components

import { Fragment } from "react";


const PrimeraApp = ( { saludo, subtitulo }) =>{
    
    return (

        <Fragment>
            <h1> {saludo} </h1>
            <p>{subtitulo}</p> 
        </Fragment >
        
    ); 
}


//Forma de validar propiedades de un componente de forma obligatoria
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Declarar valores por defecto
//Default values in properties

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;