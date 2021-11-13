const express = require('express')
const UserController = require('../controllers/user.controller')

const api = express.Router()

api.get('/user/:id', UserController.getUser)
api.post('/user', UserController.postUser)
api.put('/user/:id', UserController.updateUser)
api.delete('/user/:id', UserController.deleteUser)

module.exports = api