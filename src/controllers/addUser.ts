import { Request, Response } from 'express';
import UserModel,{User} from '../models/User';
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
    public  add (algo:Object) {
        
        const user:User = new UserModel(algo);
         user.save();
        console.log(algo);

    }
}

export const addUser = new AddUser();


addUser.add({nombre:'Raymon', apellido:'Guzman',edad:20});
// console.log(addUser);
