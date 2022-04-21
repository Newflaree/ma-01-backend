import jwt from 'jsonwebtoken';

export const generateJWT = ( uid = '' ) => {
	return new Promise( ( resolve, reject ) => {
		const payload = { uid };

		jwt.sign( payload, process.env.SECRET_KEY || '', {
			expiresIn: '2h'
		}, ( err , token ) => {
			if ( err ) {
				console.log( `${ '[JWT.HELPER]'.red }: Error details - ${ err }` );
				reject( 'The token could not be generated.' );
			} else {
				resolve( token );
			}
		})
	});
}
