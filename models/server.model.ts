import express, { Application } from 'express';
import { ApiPath } from '../interfaces/interfaces';
import cors from 'cors';
import { router as authRouter } from '../routes/auth.route';

class Server {
	private app: Application;
	private port: string;
	private apiPaths: ApiPath;

	constructor() {
		this.port = process.env.PORT || '3001';
		this.app = express();
		this.apiPaths = {
			auth: '/api/auth'
		}

		//TODO: Connect to database

		this.middlewares();
		this.routes();
	}

	//TODO: dbConnection method

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
