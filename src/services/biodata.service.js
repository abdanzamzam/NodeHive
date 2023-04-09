/* eslint-disable no-useless-catch */
const { Biodata } = require('../models')

exports.createOne = async (
  { userId, name, numberPhone, photo },
  transaction
) => {
  try {
    const result = await Biodata.create(
      { userId, name, numberPhone, photo },
      { transaction }
    )
    return result
  } catch (error) {
    throw error
  }
}
