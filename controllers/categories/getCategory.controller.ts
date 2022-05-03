import { Request, Response } from "express";
// Models
import { Category } from "../../models";

/*
  PATH: '/api/categories/:id'
*/
export const getCategory = async( req: Request, res: Response ) => {
	const { id } = req.params;

	try {
		const category = await Category.findById( id ).populate( 'user', 'name' ) || { status: false };
		
		if ( !category.status ) {
			return res.status( 400 ).json({
				ok: false,
      	msg: 'There is no category with that id.'
			});
		}

		res.json({
			ok: true,
			category
		});

	} catch ( err ) {
		console.log( `${ '[GET-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
