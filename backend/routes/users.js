import express from 'express';

import{login,signup} from '../controllers/Auth.js';
// import { getCurrentUser } from '../controllers/Users.js';

const router=express.Router();


router.post('/signup',signup);
router.post('/login',login);
// router.get('/getCurrentUsers/:id',getCurrentUser);


export default router;

