import mongoose from 'mongoose';

const dbConnection = async() => {
	try {
		await mongoose.connect( process.env.MONGO_CNN || '' );

	} catch ( err ) {
		console.log( `${ '[DATABASE.CONFIG]'.red }: Error details - ${ err }` );
	}
}

export default dbConnection;
