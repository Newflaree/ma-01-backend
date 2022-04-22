// Models
import { Category } from "../../../models"

export const categoryIdValidator = async( id = '' ) => {
	const categoryExists = await Category.findById( id );
	if ( !categoryExists ) {
    throw new Error( 'There are no category with that id.' );
	}

	return true;
}
