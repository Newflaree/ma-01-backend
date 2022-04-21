import { Request, Response } from "express";
// Models
import User from '../../models/user.model';

export const getUser = async( req: Request, res: Response ) => {
	const { id } = req.params;

	const user = await User.findById({ _id: id }) || { status: false };
	try {
		
		if ( !user.status ) {
			return res.status( 500 ).json({
				ok: false,
				msg: 'There is no user with that id.'
			});
		}

		res.json({
			ok: true,
			user
		});

	} catch ( err ) {
		console.log( `${ '[GET-USER.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
