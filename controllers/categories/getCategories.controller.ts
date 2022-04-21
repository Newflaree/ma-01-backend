import { Request, Response } from "express";
// Models

export const getCategories = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'getCategories'
		});

	} catch ( err ) {
		console.log( `${ '[GET-CATEGORIES.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
