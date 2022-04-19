export * from 'colors';

import dotenv from 'dotenv';
dotenv.config();

import Server from './models/server.model';

// Server Instance
const server: Server = new Server();
server.listen();
