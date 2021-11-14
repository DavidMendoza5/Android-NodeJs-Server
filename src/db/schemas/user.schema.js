const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = Schema({
  name: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
},
{
  timestamps: true
}
)

module.exports = model('User', UserSchema)