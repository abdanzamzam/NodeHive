const { HTTPStatusCode } = require('../helpers/constants')

exports.responseError = async (res, error) => {
  return res.status(error.status ? error.status : 500).send({
    status: HTTPStatusCode[`${error.status ? error.status : 500}`],
    code: error.status,
    message: error.message,
    data: []
  })
}
