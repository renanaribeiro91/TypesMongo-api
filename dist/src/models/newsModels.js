"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    hat: {
        type: String,
    }, title: {
        type: String,
    }, text: {
        type: String,
    }, authror: {
        type: String,
    }, img: {
        type: String,
    }, publicsDate: {
        type: Date,
    }, link: {
        type: String,
    }, active: {
        type: Boolean,
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('news', newsSchema);
