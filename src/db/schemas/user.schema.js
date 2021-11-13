const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  birthDate: {
    type: String
  }
},
{
  timestamps: true
}
)

module.exports = model('User', UserSchema)