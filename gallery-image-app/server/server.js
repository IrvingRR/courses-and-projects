const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { connectDB } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            images: '/api/images',
            categories: '/api/categories'
        };

        this.connectDatabase();
        this.middlewares();
        this.routes();

    };

    async connectDatabase() { await connectDB(); }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('./public'));
        this.app.use(fileUpload({ // Fileupload - Load files
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    };

    routes() {
        this.app.use(this.paths.images, require('../routes/images'));
        this.app.use(this.paths.categories, require('../routes/categories'));
     };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening at: http://localhost:${this.port}`);
        });
    };
    
}

module.exports = Server;