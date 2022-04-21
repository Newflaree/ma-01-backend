import { Request, Response } from "express";
// Models

export const updateCategory = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'updateCategory'
		});

	} catch ( err ) {
		console.log( `${ '[UPDATE-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
