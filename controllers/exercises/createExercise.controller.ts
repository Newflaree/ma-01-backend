import { Request, Response } from "express";
// Models
import { Exercise } from "../../models";

export const createExercise = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'createExercise'
		});

	} catch ( err ) {
		console.log( `${ '[CREATE-EXERCISE.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
