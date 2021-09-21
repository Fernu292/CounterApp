import {getHeroeByIdAsync} from '../base-pruebas/09-promesas'
import heroes from '../data/heroes';
 
 
describe('Pruebas con promesas', () => {

     test('Debe retornar un Heroe Async', ( done )=>{
         
        const id = 1;

        getHeroeByIdAsync ( id )
            .then( hero => {
                expect( hero ).toBe(heroes[0]);
                done();
            });
     });

     test('Obtener un error si heroe con id no existe', ( done )=>{

        const id = 10;

        getHeroeByIdAsync(id)
            .catch( err =>{
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            })
     })

});
 