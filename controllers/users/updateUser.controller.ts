import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
// Models
import { User } from "../../models";

export const updateUser = async( req: Request, res: Response ) => {
	const { id } = req.params;
	const { _id, email, password,  status, ...rest } = req.body;

	try {
		if ( password ) {
			const salt = bcrypt.genSaltSync();
			rest.password = bcrypt.hashSync( password, salt );
		}

		const user = await User.findByIdAndUpdate( id, rest, { new: true } );

		res.json({
			ok: true,
			user
		});
		

	} catch ( err ) {
		console.log( `${ '[UPDATE-USER.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
