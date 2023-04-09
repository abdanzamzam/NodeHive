/* eslint-disable no-throw-literal */
/* eslint-disable no-useless-catch */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { User } = require('../models')

exports.createOne = async ({ username, email, password }, transaction) => {
  try {
    const result = await User.create(
      { username, email, password: bcrypt.hashSync(password, 8) },
      { transaction }
    )
    return result
  } catch (error) {
    throw error
  }
}

exports.getOneByUsername = async ({ username }) => {
  try {
    const result = await User.findOne({
      where: { username },
      attributes: ['id', 'username', 'nik', 'email', 'password']
    })
    if (!result) {
      throw {
        status: 404,
        message: 'Username not found'
      }
    }
    return result
  } catch (error) {
    throw error
  }
}

exports.verifyPassword = async ({ password }, userPassword) => {
  try {
    const result = await bcrypt.compare(password, userPassword)
    if (!result) {
      throw {
        status: 401,
        message: 'Invalid password'
      }
    }
    return result
  } catch (error) {
    throw error
  }
}

exports.generateToken = async ({ id, email, username, nik }) => {
  try {
    const payload = {
      id,
      email,
      username,
      nik
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY)
    return token
  } catch (error) {
    throw error
  }
}
