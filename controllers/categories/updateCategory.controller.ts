import { Response } from "express";
// Interfaces
import { UserAuthRequest } from "../../interfaces/interfaces";
// Models
import { Category } from "../../models";

/*
  PATH: '/api/categories/:id'
*/
export const updateCategory = async( req: UserAuthRequest, res: Response ) => {
	const { id } = req.params;
	const { _id, status, ...data } = req.body;

	data.name = data.name.toUpperCase();
	data.user = req.user._id;

	try {
		const category = await Category.findByIdAndUpdate( id, data, { new: true } )
			.populate( 'user', 'name' );

		res.json({
			ok: true,
			category
		});

	} catch ( err ) {
		console.log( `${ '[UPDATE-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
