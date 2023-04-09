const status = require('../utils/responseError')
const sq = require('../models').sequelize

const AuthService = require('../services/auth.service')
const BiodataService = require('../services/biodata.service')
const RoleService = require('../services/role.service')
const UserRoleService = require('../services/userRole.service')

exports.signUp = async (req, res) => {
  const transaction = await sq.transaction()
  try {
    const data = req.body
    const user = await AuthService.createOne(data, transaction)
    const biodata = await BiodataService.createOne(
      { userId: user.id, ...data },
      transaction
    )
    const role = await RoleService.getOneByRole(data)
    const userRole = await UserRoleService.createOne(
      { roleId: role.id, userId: user.id },
      transaction
    )
    await transaction.commit()
    return res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'success',
      data: {
        ...user.dataValues,
        ...biodata.dataValues,
        ...userRole.dataValues
      }
    })
  } catch (error) {
    await transaction.rollback()
    return res.status(500).send({ status: 500, message: error.message })
  }
}

exports.login = async (req, res) => {
  try {
    const data = req.body

    const user = await AuthService.getOneByUsername(data)
    await AuthService.verifyPassword(data, user.password)

    const [userRole, token] = await Promise.all([
      UserRoleService.getOneJoinRole(user.id),
      AuthService.generateToken(user)
    ])

    return res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'success',
      data: {
        username: user.username,
        token,
        refreshToken: '',
        role: userRole.Role.roleCode
      }
    })
  } catch (error) {
    return status.resError(res, error)
  }
}
