const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const { connectDB } = require('../db/config');
const { createServer } = require('http');
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths = {
            roles: '/api/roles',
            areas: '/api/areas',
            jobs: '/api/jobs',
            users: '/api/users',
            tasks: '/api/tasks',
            searchs: '/api/searchs',
            chat: '/api/chat',
            auth: '/api/auth'
        };

        this.connectDatabase();
        this.middlewares();
        this.router();
        this.sockets();

    };

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(fileUpload({ // Fileupload - Load files
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    };
    
    async connectDatabase() { 
        await connectDB(); 
    };

    router() {
        this.app.use(this.paths.roles, require('../routes/roles'));
        this.app.use(this.paths.areas, require('../routes/areas'));
        this.app.use(this.paths.jobs, require('../routes/jobs'));
        this.app.use(this.paths.users, require('../routes/users'));
        this.app.use(this.paths.tasks, require('../routes/tasks'));
        this.app.use(this.paths.searchs, require('../routes/searchs'));
        this.app.use(this.paths.chat, require('../routes/chat'));
        this.app.use(this.paths.auth, require('../routes/auth'));
    };

    sockets() {
        this.io.on('connection', socketController);
    };

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listening at: http://localhost:${this.port}`);
        });
    };

};

module.exports = Server;