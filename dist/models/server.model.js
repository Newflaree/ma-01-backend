"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import cors from 'cors';
class Server {
    constructor() {
        this.port = '3001';
        this.app = (0, express_1.default)();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`${'[SERVER.LISTEN]:'.green} Server listening on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.model.js.map