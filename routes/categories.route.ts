import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { 
	createCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory
} from '../controllers/categories';
// Helpers
import { categoryIdValidator } from '../helpers/db-validators/categories';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

export const router: Router = Router();

/*
	Path: /api/categories
*/
router.get( '/', validateJWT, getCategories );

router.get( '/:id', [
	validateJWT,
	check( 'id', 'Not a mongo id.' ).isMongoId(),
	check( 'id' ).custom( categoryIdValidator ),
	validateFields
], getCategory );

router.post( '/', [
	validateJWT,
	check( 'name', 'The name is mandatory.' ).not().isEmpty(),
	check( 'code', 'The code is mandatory.' ).not().isEmpty(),
	validateFields
], createCategory );

router.put( '/:id', [
	validateJWT,
	check( 'id', 'Not a mongo id.' ).isMongoId(),
	check( 'id' ).custom( categoryIdValidator ),
	validateFields
], updateCategory );

router.delete( '/:id', [
	validateJWT,
	check( 'id', 'Not a mongo id.' ).isMongoId(),
	check( 'id' ).custom( categoryIdValidator ),
	validateFields
], deleteCategory );
