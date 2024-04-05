import express from 'express';

import{login,signup} from '../controllers/Auth.js';
// import { getCurrentUser } from '../controllers/Users.js';
import {postbook, getbook} from '../controllers/books.js';

const router=express.Router();


router.post('/signup',signup);
router.post('/login',login);
router.put('/book',postbook);
router.get('/getbook',getbook);
// router.get('/getCurrentUsers/:id',getCurrentUser);


export default router;

