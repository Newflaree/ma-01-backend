import { Request, Response } from "express";
// Models
import { Exercise } from "../../models";

/*
  PATH: '/api/exercises'
*/
export const getExercises = async( req: Request, res: Response ) => {
  const { limit = 5, from = 0 } = req.query;
  const exception = { status: true };

	try {
    const [ total, exercises ] = await Promise.all([
      Exercise.countDocuments( exception ),
      Exercise.find( exception )
    ]);

		res.json({
			ok: true,
      total,
      exercises
		});

	} catch ( err ) {
		console.log( `${ '[GET-EXERCISES.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
