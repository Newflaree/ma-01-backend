import { Request, Response } from "express";
// Models
import User from '../../models/user.model';

export const getUsers = async( req: Request, res: Response ) => {
	const { limit = 5, from = 0 } = req.query;
	const condition = { status: true };

	try {
		const [ total, users ] = await Promise.all([
			User.countDocuments( condition ),
			User.find( condition )
					.skip( Number( from ) )
					.limit( Number( limit ) )
		]);

		res.json({
			ok: true,
			total,
			users
		});

	} catch ( err ) {
		console.log( `${ '[GET-USERS.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
