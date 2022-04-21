import { Request, Response } from "express";
// Models

export const deleteCategory = async( req: Request, res: Response ) => {

	try {

		res.json({
			ok: true,
			msg: 'deleteCategory'
		});

	} catch ( err ) {
		console.log( `${ '[DELETE-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
