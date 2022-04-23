import { Request, Response } from "express";
// Models
import { Exercise } from "../../models";

export const getExercises = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'getExercises'
		});

	} catch ( err ) {
		console.log( `${ '[GET-EXERCISES.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
