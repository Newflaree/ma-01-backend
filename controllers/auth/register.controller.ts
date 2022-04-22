import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
// Models
import { User } from "../../models";
// JWT
import { generateJWT } from "../../helpers/jwt/generate-jwt.helper";

export const authRegister = async( req: Request, res: Response ) => {
	const { name, email, password } = req.body;

	try {
		const user = new User({
			name,
			email,
			password
		});

		// Encrypt password
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync( password, salt );

		// Save to DB
		await user.save();

		// Generate JWT
		const token = await generateJWT( user.id );

		res.json({
			ok: true,
			user,
			token
		});

	} catch ( err ) {
		console.log( `${ '[REGISTER.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
