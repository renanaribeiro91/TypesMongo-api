"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./src/database/db");
const routes_1 = require("./src/routes/routes");
class App {
    constructor() {
        this.express = express();
        this.routes();
        this._DB = new db_1.default();
        this._DB.createConnection();
        this.middler();
    }
    routes() {
        this.express.use(routes_1.default);
    }
    middler() {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }
}
exports.default = new App().express;
