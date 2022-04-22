import { Request, Response } from "express";
// Models
import { User } from "../../models";

export const deleteUser = async( req: Request, res: Response ) => {
	const { id } = req.params;
	const inactivator = { status: false };

	try {
		const user = await User.findByIdAndUpdate( id, inactivator, { new: true } );

		res.json({
			ok: true,
			user
		});

	} catch ( err ) {
		console.log( `${ '[DELETE-USER.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
