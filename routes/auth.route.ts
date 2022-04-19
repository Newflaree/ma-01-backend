import { Router } from 'express';
// Controller
import { authLogin, authRegister } from '../controllers/auth';

export const router: Router = Router();

/*
	Path: /api/auth
*/
router.post( '/register', authRegister );
router.post( '/login', authLogin );
