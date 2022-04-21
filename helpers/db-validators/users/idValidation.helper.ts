// Models
import User from '../../../models/user.model';

export const idValidation = async( id = '' ) => {
  const userExists = await User.findById( id );
  if ( !userExists ) {
    throw new Error( 'There are no user with that id' );
  }

  return true;
} 
