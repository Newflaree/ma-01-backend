import { Request, Response } from "express";
// Models

export const createCategory = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'createCategory'
		});

	} catch ( err ) {
		console.log( `${ '[CREATE-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
