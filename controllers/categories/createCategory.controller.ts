import { Response } from "express";
// Interfaces
import { UserAuthRequest } from "../../interfaces/interfaces";
// Models
import { Category } from "../../models";

export const createCategory = async( req: UserAuthRequest , res: Response ) => {
	const name = req.body.name.toUpperCase();
	const { code } = req.body;

	try {
		const categoryDB = await Category.findOne({ code });

		if ( categoryDB ) {
			return res.status( 400 ).json({
				ok: false,
				msg: `Category ${ categoryDB.code } already exists.`
			});
		}

  	const data = {
    	name,
			code,
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
