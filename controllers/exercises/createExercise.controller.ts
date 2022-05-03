import { Response } from "express";
// Interfaces
import { UserAuthRequest } from "../../interfaces/interfaces";
// Models
import { Exercise } from "../../models";

/*
  PATH: '/api/exercises'
*/
export const createExercise = async( req: UserAuthRequest, res: Response ) => {
	const { status, user, ...body } = req.body;
	const code = body.code;

	try {
  	const data = {
    	...body,
    	code: code.toUpperCase(),
    	user: req.user._id,
  	}

  	const exercise = new Exercise( data );

  	await exercise.save();

		res.status( 201 ).json({
			ok: true,
			exercise
		});

	} catch ( err ) {
		console.log( `${ '[CREATE-EXERCISE.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
