import { Router } from 'express';
import { check } from 'express-validator';
// Helpers
import { idValidation } from '../helpers/db-validators/users';
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
	check( 'id', 'Not a valid id' ).isMongoId(),
	check( 'id' ).custom( idValidation ),
	validateFields
], getUser );

router.put( '/:id',[
	validateFields
], updateUser );

router.delete( '/:id', [
	validateFields
], deleteUser );
