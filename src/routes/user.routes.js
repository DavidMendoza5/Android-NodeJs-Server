const express = require('express')
const UserController = require('../controllers/user.controller')

const api = express.Router()

api.get('/user/:id', UserController.getUser)
api.post('/user', UserController.postUser)

module.exports = api