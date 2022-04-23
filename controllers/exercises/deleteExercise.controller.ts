import { Request, Response } from "express";
// Models
import { Exercise } from "../../models";

export const deleteExercise = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'deleteExercise'
		});

	} catch ( err ) {
		console.log( `${ '[DELETE-EXERCISE.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
