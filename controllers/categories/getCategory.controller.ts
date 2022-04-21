import { Request, Response } from "express";
// Models

export const getCategory = async( req: Request, res: Response ) => {

	try {
		
		res.json({
			ok: true,
			msg: 'getCategory'
		});

	} catch ( err ) {
		console.log( `${ '[GET-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
