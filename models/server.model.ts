import express, { Application } from 'express';
//import cors from 'cors';

class Server {
	private app: Application;
	private port: string;

	constructor() {
		this.port = '3001';
		this.app = express();
	}

	listen() {
		this.app.listen( this.port, () => {
			console.clear();
			console.log( `${ '[SERVER.LISTEN]:'.green } Server listening on port ${ this.port }` );
		});
	}
}

export default Server;
