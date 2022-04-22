import { Router } from 'express';
import { check } from 'express-validator';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';
// Controller
import { 
	createCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory
} from '../controllers/categories';
// Helpers

export const router: Router = Router();

/*
	Path: /api/categories
*/
router.get( '/', validateJWT, getCategories );

router.get( '/:id', [
	validateJWT,
	validateFields
], getCategory );

router.post( '/', [
	validateJWT,
	check( 'name', 'The name is mandatory' ).not().isEmpty(),
	validateFields
], createCategory );

router.put( '/:id', [
	validateJWT,
	validateFields
], updateCategory );

router.delete( '/:id', [
	validateJWT,
	validateFields
], deleteCategory );
