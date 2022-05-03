import { Request, Response } from "express";
// Models
import { Exercise } from "../../models";

/*
  PATH: '/api/exercises/:id'
*/
export const getExercise = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'getExercise'
		});

	} catch ( err ) {
		console.log( `${ '[GET-EXERCISE.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
