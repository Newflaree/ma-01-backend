import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { 
	createExercise,
	deleteExercise,
	getExercise,
	getExercises,
	updateExercise
} from '../controllers/exercises';
// Helpers
import { categoryIdValidator } from '../helpers/db-validators/categories';
import { exerciseCodeValidator } from '../helpers/db-validators/exercises';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

export const router: Router = Router();

/*
	Path: /api/exercises
*/
router.get( '/', validateJWT, getExercises );

router.get( '/:id',[
	validateJWT,
	validateFields
], getExercise );

router.post( '/',[
	validateJWT,
	check( 'code', 'The code is mandatory' ).not().isEmpty(),
	check( 'code' ).custom( exerciseCodeValidator ),
	check( 'category', 'Not a mongo id' ).isMongoId(),
	check( 'category' ).custom( categoryIdValidator ),
	check( 'desc', 'The description is mandatory' ).not().isEmpty(),
	check( 'a', 'The A alternative is mandatory' ).not().isEmpty(),
	check( 'b', 'The B alternative is mandatory' ).not().isEmpty(),
	check( 'c', 'The C alternative is mandatory' ).not().isEmpty(),
	check( 'd', 'The D alternative is mandatory' ).not().isEmpty(),
	check( 'e', 'The E alternative is mandatory' ).not().isEmpty(),
	check( 'correctAlt', 'The correct alternative is mandatory' ).not().isEmpty(),
	validateFields
], createExercise );

router.put( '/:id',[
	validateJWT,
	validateFields
], updateExercise );

router.delete( '/:id',[
	validateJWT,
	validateFields
], deleteExercise );
