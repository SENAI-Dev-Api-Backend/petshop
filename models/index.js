const Sequelize = require("sequelize")
const configuration = require("../utils/configuration")
const User = require("./user.model")

const config = configuration()
const sequelize = new Sequelize(config.database)

const database = {
  Sequelize,
  sequelize,
  User: User(sequelize, Sequelize),
}

module.exports = database
