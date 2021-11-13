const UserService = require('../services/user.service')

const postUser = async (req, res, next)  => {
  try {
    const data = await UserService.createUser(req.body)
    res.status(201).send(data)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await UserService.getUser(req.params.id)
    res.status(200).send(user)
  }catch(err) {
    res.status(500).send(err.message)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body)
    res.status(200).send(user)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const userEliminated = await UserService.deleteUser(req.params.id)
    res.status(200).send(userEliminated)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  postUser,
  getUser,
  updateUser,
  deleteUser
}