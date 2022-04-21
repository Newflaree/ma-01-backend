import { Request, Response } from "express";
// Models
import User from '../../models/user.model';

export const updateUser = async( req: Request, res: Response ) => {
	try {

	} catch ( err ) {
		console.log( `${ '[UPDATE-USER.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
