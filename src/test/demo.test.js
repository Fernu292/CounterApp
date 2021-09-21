

describe( 'Pruebas en el archivo demo.test.js', ()=>{
    test('Deben ser iguales los strings', () => {
    
        //Inicializacion
        const mensaje = 'Hola Mundo';
    
    
        //Estimulo 
        const mensaje2 = "Hola Mundo";
    
        //Observar comportamiento
        expect(mensaje).toBe(mensaje2);
    
    });
});

