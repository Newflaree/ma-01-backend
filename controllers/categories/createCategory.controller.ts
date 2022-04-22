import { Response } from "express";
// Interfaces
import { UserAuthRequest } from "../../interfaces/interfaces";
// Models
import { Category } from "../../models";

export const createCategory = async( req: UserAuthRequest , res: Response ) => {
	const name = req.body.name.toUpperCase();

	try {
		const categoryDB = await Category.findOne({ name });

		if ( categoryDB ) {
			return res.status( 400 ).json({
				ok: false,
				msg: `Category ${ categoryDB.name } already exists.`
			});
		}

  	const data = {
    	name,
    	user: req.user._id
  	}

  	const category = new Category( data );
  	await category.save();

  	res.status( 201 ).json({
			ok: true,
    	category
  	});

	} catch ( err ) {
		console.log( `${ '[CREATE-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }.` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
