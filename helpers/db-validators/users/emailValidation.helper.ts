// Models
import User from '../../../models/user.model';

export const emailValidation = async( email = '' ) => {
  const emailExists = await User.findOne({ email })
  if ( emailExists ) {
    throw new Error( 'There is already a user with that email' );
  }

  return true;
} 
