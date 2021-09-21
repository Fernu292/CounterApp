import {getSaludo} from '../base-pruebas/02-template-string';

describe('Pruebas en 02-templateString', ()=>{

    test('getSaludo debe retornar Hola Fernando', ()=>{
        const nombre = "Fernando";

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe(`Hola ${nombre}`);
        
    })

    //getSaludo debe retornar Hola Carlos si no hay argumento

    test('getSaludo debe retornar Hola Carlos', ()=>{
        const saludo = getSaludo();

        expect( saludo ).toBe( `Hola Carlos`);
    })


});