import express from 'express'

import controller from '../DAO/queja.js'

const routes = express.Router()

routes.get('/', controller.findAll )
routes.post('/', controller.create )
routes.get('/:id', controller.findOne )
routes.put('/', controller.update )
routes.delete('/:id', controller.remove)

export default routes