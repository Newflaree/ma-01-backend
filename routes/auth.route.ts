import { Router } from 'express';
import { check } from 'express-validator';
// Helpers
import { emailValidation } from '../helpers/db-validators/users';
// Middlewares
import { validateFields } from '../middlewares';
// Controller
import { authLogin, authRegister } from '../controllers/auth';

export const router: Router = Router();

/*
	Path: /api/auth
*/
router.post( '/register',[
	check( 'name', 'The name is mandatory' ).not().isEmpty(),
  check( 'password', 'Password must be longer than 6 characters' ).isLength({ min: 6 }),
  check( 'email', 'The email is not valid' ).isEmail(),
  check( 'email' ).custom( emailValidation ),
	validateFields
] , authRegister );

router.post( '/login', authLogin );
