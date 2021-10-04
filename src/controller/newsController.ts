import main from '../repository/NewsRepository'


class newsController {

    async get(req, res) {
        try {
            const news = await main.get()
            return res.status(200).send(news)
        } catch (error) {
            res.httpStatus[501].send({ error: error })
        }
    }

    async getById(req, res) {
        try {
            const { _id } = req.params
            const news = await main.getById(_id)
            return res.status(200).send(news)
        } catch (error) {
            res.status(500).send({ error: error })
        }

    }

    async create(req, res) {
        try {
            const news = req.body
            const resNews = await main.create(news)
            return res.status(200).send(resNews)

        } catch (error) {
            res.status(500).send({ error: error })
        }

    }

    async update(req, res) {
        try {
            const { _id } = req.params
            const news = req.body
            const resNews = await main.update(_id, news)
            return res.status(200).send(resNews)
        } catch (error) {
            res.status(500).send({ error: error })
        }

    }

    async remove(req, res) {
        try {
            const { _id } = req.params
            const resNews = await main.delete(_id)
            return res.status(500).send(resNews)
        } catch (erro) {

        }
    }
}

export default new newsController()