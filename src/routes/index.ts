import { Router } from 'express';
import { indexController } from '../controllers/indexControllers';
import { addUser } from '../controllers/addUser';

const router: Router = Router();

router.get('/', indexController.index);
router.get('/add', addUser.savingData);


export default router;