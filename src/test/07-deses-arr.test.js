import { retornaArreglo } from "../base-pruebas/07-deses-arr";

describe('Pruebas en desestructuracion array', ()=>{
    test('retornarArray debe retornar un string y un numero',()=>{

        const [string , numero] =retornaArreglo();

        expect(string).toBe('ABC');
        expect(typeof string).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
    })
})