const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  const token = await req.headers['x-access-token']

  if (!token) {
    return res.status(403).send({
      status: 'FORBIDDEN',
      code: 403,
      message: 'Token in empty!',
      data: []
    })
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: 'UNAUTHORIZED',
        code: 401,
        message: 'Token invalid!',
        data: []
      })
    }
    req.userId = decoded.id
    next()
  })
}

const isAdmin = async (req, res, next) => {
  const accessAllowed = ['admin']
  const accessRole = await checkAccessRole(req.userId, accessAllowed)

  if (accessRole) {
    next()
  } else {
    res.status(401).send({
      message: 'Tidak memiliki akses admin!'
    })
  }
}

const isRoot = async (req, res, next) => {
  const accessAllowed = ['root']
  const accessRole = await checkAccessRole(req.userId, accessAllowed)

  if (accessRole) {
    next()
  } else {
    res.status(401).send({
      message: 'Tidak memiliki akses root!'
    })
  }
}

const isRootOrAdmin = async (req, res, next) => {
  const accessAllowed = ['admin', 'root']
  const accessRole = await checkAccessRole(req.userId, accessAllowed)

  if (accessRole) {
    next()
  } else {
    res.status(401).send({
      message: 'Tidak memiliki akses admin/ root!'
    })
  }
}

const authJwt = {
  verifyToken,
  isAdmin,
  isRoot,
  isRootOrAdmin
}

module.exports = authJwt
