import { Router } from 'express';
import { indexController } from '../controllers/indexControllers';

const router: Router = Router();

router.get('/', indexController.index);
router.get('/add', (req, res) => {res.send('Adding')});

export default router;