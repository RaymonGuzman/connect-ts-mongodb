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
    public async addUser (Identification:Object) {
        
        const user:User = new UserModel(Identification);
         await user.save();
        console.log(Identification);

    }

    public savingData (req:Request, res:Response) {
        addUser.addUser({nombre:'Raymon', apellido:'Guzman',edad:20});
        res.send('Data Saved');
   }


    
}

export const addUser = new AddUser();


// addUser.add({nombre:'Raymon', apellido:'Guzman',edad:20});
// console.log(addUser);
