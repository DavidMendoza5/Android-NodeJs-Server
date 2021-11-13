require('dotenv').config()

const config = {
    port: process.env.PORT,
    connection: process.env.DB_CONNECTION,
    host: `http://${process.env.HOST}:${process.env.PORT}/`,
}

module.exports = config;