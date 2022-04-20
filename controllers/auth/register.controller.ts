import { Request, Response } from "express";
// Models
import User from '../../models/user.model';

export const authRegister = async( req: Request, res: Response ) => {
	const { name, email, password } = req.body;

	try {
		const user = new User({
			name,
			email,
			password
		});

		await user.save();

		res.json({
			ok: true,
			user
		});

	} catch ( err ) {
		console.log( `${ '[REGISTER.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
