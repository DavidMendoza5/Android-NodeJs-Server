const Repository = require('../db/repository/abstract.repository')
const UserSchema = require('../db/schemas/user.schema')

const createUser = async (userData) => {
  try {
    const data = await Repository.save(UserSchema, userData)
    return data
  } catch(err) {
    throw new Error('Error al crear el usuario')
  }
}

const getUser = async (id) => {
  try {
    const user = await Repository.getOne(UserSchema, id)
    if(user.length === 0) {
      throw new Error('Usuario no encontrado')
    }
    return user
  } catch(err) {
    throw new Error('Error al buscar el usuario')
  }
}

const updateUser = async (id, data) => {
  try {
    const user = await Repository.updateData(UserSchema, id, data)
    return user
  } catch(err) {
    throw new Error('Error al actualizar el usuario')
  }
}

const deleteUser = async (id) => {
  try {
    const user = await Repository.deleteData(UserSchema, id)
    return user
  } catch(err) {
    throw new Error('Error al eliminar el usuario')
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser
}