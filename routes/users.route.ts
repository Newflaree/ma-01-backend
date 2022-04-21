import { Router } from 'express';
import { check } from 'express-validator';
// Helpers
import { emailValidation } from '../helpers/db-validators/users';
// Middlewares
import { validateFields } from '../middlewares';
// Controller
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/users';

export const router: Router = Router();

/*
	Path: /api/users
*/
router.get( '/', getUsers );

router.get( '/:id',[
	validateFields
], getUser );

router.put( '/:id',[
	validateFields
], updateUser );

router.delete( '/:id', [
	validateFields
], deleteUser );
