import mongoose from 'mongoose';

const dbConnection = async() => {
	await mongoose.connect( process.env.MONGO_CNN || '' );
}

export default dbConnection;
