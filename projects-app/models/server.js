require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectionDB } = require('../db/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/projects-api/users';
        
        this.connectDataBase();
        this.middlewares();
        this.routes();
    }

    // Connection with database (MongoDB - Atlas)
    async connectDataBase () { 
        await connectionDB();
     }

    // Middlewares
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    // Routes
    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
     }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at: http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;