import { Router } from 'express';
// Controllers
import { 
	createExercise,
	deleteExercise,
	getExercise,
	getExercises,
	updateExercise
} from '../controllers/exercises';

export const router: Router = Router();

/*
	Path: /api/exercises
*/
router.get( '/', getExercises );
router.get( '/:id', getExercise );
router.post( '/', createExercise );
router.put( '/:id', updateExercise );
router.delete( '/:id', deleteExercise );
