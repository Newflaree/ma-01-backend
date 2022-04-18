export * from 'colors';

import dotenv from 'dotenv';
dotenv.config();

import Server from './models/server.model';

// Server Instance
const server = new Server();
server.listen();
