// Models
import { Exercise } from "../../../models";

export const exerciseCodeValidator = async( code = '' ) => {
	const exerciseExists = await Exercise.findOne({ code });
	if ( exerciseExists ) {
    throw new Error( 'Already exists an exercise with that id.' );
	}

	return true;
}
