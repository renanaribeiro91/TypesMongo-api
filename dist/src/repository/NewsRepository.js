"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsModels_1 = require("../models/newsModels");
const main = class newsRepository {
    get() {
        return newsModels_1.default.find({});
    }
    getById(_id) {
        return newsModels_1.default.findById(_id);
    }
    create(news) {
        return newsModels_1.default.create(news);
    }
    update(_id, news) {
        return newsModels_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return newsModels_1.default.findByIdAndRemove(_id);
    }
};
exports.default = new main();
