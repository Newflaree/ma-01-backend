import { Request, Response } from "express";
// Models
import { Category } from "../../models";

export const deleteCategory = async( req: Request, res: Response ) => {
	const { id } = req.params;
	const inactivator = { status: false };

	try {
		const deletedCategory = await Category.findByIdAndUpdate( id, inactivator, { new: true } );

		res.json({
			ok: true,
			deletedCategory
		});

	} catch ( err ) {
		console.log( `${ '[DELETE-CATEGORY.CONTROLLER]'.red }: Error details - ${ err }` );
		res.status( 500 ).json({
			ok: false,
			msg: 'Something went wrong. Talk to the admin.'
		});
	}
}
