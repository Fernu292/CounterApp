import { getImagen } from "../base-pruebas/11-async-await";


describe('Async- await y Fetch', ()=>{

    test('Debe retornar un url de image', async()=>{
        
        const url = await getImagen();
        expect ( url.includes('https://') ).toBe(true);
    });

})