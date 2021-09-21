
import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heroes";



describe('Testing of 08-imp-exp ', ()=>{
    test('getHeroById debe retornar el nombre del heroe', ()=>{
        const id = 1;

        const hero = getHeroeById(id);

        const heroData = heroes.find( h => h.id === id );

        expect( hero ).toEqual(heroData);
    })

    test('getHeroById debe retornar el undefine si el heroe no exste', ()=>{
        const id = 10;

        const hero = getHeroeById(id);

        expect( hero ).toBe(undefined);
    });


    //Tarea 


    //La nueva prueba debe retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado

    test('Debe retornar un array con los heroes de DC', ()=>{

        const owner = 'DC';

        const heroes= getHeroesByOwner(owner);

        let dcHeros = heroes.filter( h => h.owner === owner);

        

        expect(heroes).toEqual( dcHeros );
    })



    //Debe retornar un arreglo con los heroes de Marvel
    //length 2 //toBe 


    test('Debe retornar un array de heroes de Marvel y su longitud', ()=>{

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(2);
    })

})