"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class dataBase {
    constructor() {
        this.DB_URL = process.env.DB || 'mongodb://localhost:27017/db_portal' || 'mongodb://localhost:27017/db_portal';
    }
    createConnection() {
        (0, mongoose_1.connect)(this.DB_URL), () => {
            console.log('conected');
        };
    }
}
exports.default = dataBase;
