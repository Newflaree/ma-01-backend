import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
// Models
import User from '../../models/user.model';
// JWT
import { generateJWT } from "../../helpers/jwt/generate-jwt.helper";

export const authLogin = async( req: Request, res: Response ) => {
	const { email, password } = req.body;

	try {
		// Check if email exists
		const user = await User.findOne({ email });

		if ( !user ) {
			return res.status( 401 ).json({
				ok: false,
				msg: 'Incorrect email or password.'
			});
		}

    // Check if user is active
		if ( !user.status ) {
			return res.status( 401 ).json({
				ok: false,
				msg: 'Incorrect email or password.'
			});
		}
		
    // Check if password is valid
    const validPassword = bcrypt.compareSync( password, user.password );

		if ( !validPassword ) {
			return res.status( 401 ).json({
				ok: false,
				msg: 'Incorrect email or password.'
			});
		}

    // Generate JWT
		const token = await generateJWT( user.id );

		res.json({
			ok: true,
			user,
			token
		});

	} catch ( err ) {
		console.log( `${ '[LOGIN.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
