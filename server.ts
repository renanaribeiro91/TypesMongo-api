import * as express from "express"
import dataBase from './src/database/db'
import routes from './src/routes/routes'


class App {
    public express: express.Application
    public _DB: dataBase

    constructor() {
        this.express = express()
        this.routes()
        this._DB = new dataBase()
        this._DB.createConnection()
        this.middler()
    }

    routes() {
        this.express.use(routes)
    }

    middler() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
    }



}


export default new App().express