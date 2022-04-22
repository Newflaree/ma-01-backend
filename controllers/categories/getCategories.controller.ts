import { Request, Response } from "express";
// Models
import { Category } from "../../models";

export const getCategories = async( req: Request, res: Response ) => {
	const { limit = 5, from = 0 } = req.query;
	const condition = { status: true };

	try {
		const [ total, categories ] = await Promise.all([
			Category.countDocuments( condition ),
			Category.find( condition )
				.populate( 'user', 'name' )
				.skip( Number( from ) )
				.limit( Number( limit ) )
		]);

		res.json({
			ok: true,
			total,
			categories
		});

	} catch ( err ) {
		console.log( `${ '[GET-CATEGORIES.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
