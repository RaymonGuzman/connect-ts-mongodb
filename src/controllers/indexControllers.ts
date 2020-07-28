import { Request, Response } from 'express';

class IndexController {
    public index (req:Request, res:Response) {
         res.send('El servidor está funcionando');
    }
}

export const indexController = new IndexController();
