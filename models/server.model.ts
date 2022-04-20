import express, { Application } from 'express';
import cors from 'cors';
// Interfaces
import { ApiPath } from '../interfaces/interfaces';
// Routes
import { router as authRouter } from '../routes/auth.route';
// DB
import dbConnection from '../db/config.database';

class Server {
	private app: Application;
	private port: string;
	private apiPaths: ApiPath;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '3001';
		this.apiPaths = {
			auth: '/api/auth'
		}

		// DB Connectcion
		this.dbConnect();

		// Init Methods
		this.middlewares();
		this.routes();
	}

	async dbConnect() {
		try {
			await dbConnection()
			console.log( `${ '[SERVER.DATABASE]'.green }: Database ONLINE` );

		} catch ( err ) {
			console.log( `${ '[SERVER.DATABASE]'.red }: Error details - ${ err }` );
		}
	}

	middlewares() {
		this.app.use( cors() );
		this.app.use( express.json() );
	}

	routes() {
		this.app.use( this.apiPaths.auth, authRouter );
	}

	listen() {
		this.app.listen( this.port, () => {
			console.clear();
			console.log( `${ '[SERVER.LISTEN]'.green }: Server listening on port ${ this.port.green }` );
		});
	}
}

export default Server;
