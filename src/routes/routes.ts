import {Router} from 'express'
import newsController from '../controller/newsController'



const routes = Router()
const { get, getById, create, update, remove } = newsController

routes.get('/',(req,res)=>{res.send({mensage:"hello "})})
routes.get('/api/v1/news', get)
routes.get('/api/v1/news/:id', getById)
routes.post('/api/v1/news', create)
routes.put('/api/v1/news', update)
routes.delete('/api/v1/news', remove)

export default routes