import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';


describe('Pruebas en PrimerApp', ()=>{

    test('Demostrar el mensaje "Hola Mundo desde React', ()=>{
        const saludo = 'Hola Mundo desde React';

        const { getByText }= render( <PrimeraApp saludo = {saludo} /> );

        expect( getByText(saludo) ).toBeInTheDocument();
    })
})