
import {getUser, getUsuarioActivo} from '../base-pruebas/05-funciones';

describe('Pruebas de Funciones', ()=>{

    test('getUser debe retornar un objeto' , ()=>{

        const userTest = {
            uid: 123,
            username: 'Fernu292'
        };

        const user =  getUser();

        expect(user).toEqual( userTest );

    });

    //GetUsuarioActivo debe retornar un objeto 
    test('getUsuarioActivo debe retornar un objeto',()=>{

        const name = "Luis Fernando";

        const userActive = {
            uid: 123,
            username: name
        };
        const userAct = getUsuarioActivo(name);
        expect(userAct).toEqual(userActive);
    })
})