import express, { Application } from 'express';
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces/interfaces';
// Routes
import { 
	authRouter,
	categoriesRouter,
	exercisesRouter,
	usersRouter
} from '../routes';
// DB
import dbConnection from '../db/config.database';

class Server {
	private app: Application;
	private port: string;
	private apiPaths: ApiPaths;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '3001';
		this.apiPaths = {
			auth: '/api/auth',
			categories: '/api/categories',
			exercises: '/api/exercises',
			users: '/api/users'
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
		this.app.use( this.apiPaths.categories, categoriesRouter );
		this.app.use( this.apiPaths.exercises, exercisesRouter );
		this.app.use( this.apiPaths.users, usersRouter );
	}

	listen() {
		this.app.listen( this.port, () => {
			console.clear();
			console.log( `${ '[SERVER.LISTEN]'.green }: Server listening on port ${ this.port.green }` );
		});
	}
}

export default Server;
