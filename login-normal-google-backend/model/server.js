const express = require('express');
const cors = require('cors');
const { connectDatabase } = require('../db/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.authPath = '/api/auth';

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    connectDB() { connectDatabase(); }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    };

    routes() { 
        this.app.use(this.usersPath, require('../routes/users'));
        this.app.use(this.authPath, require('../routes/auth'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at: http://localhost:${this.port}`);
        });
    };
}

module.exports = Server;