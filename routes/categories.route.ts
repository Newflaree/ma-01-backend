import { Router } from 'express';
import { check } from 'express-validator';
// Middlewares
import { validateFields } from '../middlewares';
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
router.get( '/', getCategories );
router.get( '/:id', getCategory );
router.post( '/', createCategory );
router.put( '/:id', updateCategory );
router.delete( '/:id', deleteCategory );
