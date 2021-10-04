"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewsRepository_1 = require("../repository/NewsRepository");
class newsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield NewsRepository_1.default.get();
                return res.status(200).send(news);
            }
            catch (error) {
                res.httpStatus[501].send({ error: error });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const news = yield NewsRepository_1.default.getById(_id);
                return res.status(200).send(news);
            }
            catch (error) {
                res.status(500).send({ error: error });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const news = req.body;
                const resNews = yield NewsRepository_1.default.create(news);
                return res.status(200).send(resNews);
            }
            catch (error) {
                res.status(500).send({ error: error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const news = req.body;
                const resNews = yield NewsRepository_1.default.update(_id, news);
                return res.status(200).send({ mensage: 'noticia atualizada com sucesso' })(resNews);
            }
            catch (error) {
                res.status(500).send({ error: error });
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const resNews = yield NewsRepository_1.default.delete(_id);
                return res.status(500).send({ mensage: 'usuario deletado' })(resNews);
            }
            catch (erro) {
            }
        });
    }
}
exports.default = new newsController();
