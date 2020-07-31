import { Request, Response } from 'express';

// interface user{
//     nombre:string;
//     apellido:string;
//     edad:number;

// }
class AddUser {
    // nombre:string;
    // apellido:string;
    // edad:number;
    // constructor( nombre:string, apellido:string, edad:number){
    //     this.nombre=nombre;
    //     this.apellido=apellido;
    //     this.edad=edad;
    // }
    // public add (req:Request, res:Response) {
    //     console.log(req.body);
    //     res.send('Adding');
    // }
    public add (algo:Object) {
        //   const user = {
        //     nombre:this.nombre,
        //     apellido:this.apellido,
        //     edad:this.edad
        // };
        // if(typeof this.nombre !== undefined && typeof this.apellido !== undefined && typeof this.edad !== undefined){
        // const {nombre, apellido, edad} = algo;
        // }

        // console.log('This user ', user);
        // console.log('Hola');
        // res.send('Received');
        console.log(algo);
        // return 'Something';
    }
}

export const addUser = new AddUser();


addUser.add({nombre:'Raymon', apellido:'Guzman',edad:20});
// console.log(addUser);
